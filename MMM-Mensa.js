Module.register("MMM-Mensa", {
  defaults: {
    canteen: "mensa-garching",
    dishTypeFilter: ["ALL"]
  },

  getHeader: function () {
    return "Mensa";
  },

  getStyles: function () {
    return ["MMM-Mensa.css"];
  },

  start: function () {
    this.updateMenu();
    setInterval(() => {
      this.updateMenu();
    }, 60 * 60 * 1000);
  },

  updateMenu: function () {
    Log.info('%cMMM-Mensa updating Menu... ', 'background: #222; color: #ff9f6b');
    const weekNumber = moment().format("WW");
    const year = moment().year();
    const url = `https://tum-dev.github.io/eat-api/${this.config.canteen}/${year}/${weekNumber}.json`;

    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) { 
          try {
            const data = JSON.parse(xhr.responseText); 
            Log.info('%cMMM-Mensa Menu loaded. ', 'background: #222; color: #bada55');
            this.menu = data;
          } catch (error) {
            Log.info(`%cMMM-Mensa Error: (${error})`, 'background: #222; color: #ff0000');
            this.menu = null; 
          }
        } else if (xhr.status === 404) {
          Log.info('%cMMM-Mensa TUM EAT API has not added this week yet.', 'background: #222; color: #ff0000');
          this.menu = null;
        } else {
          Log.info(`%cMMM-Mensa Error: (HTTP ${xhr.status})`, 'background: #222; color: #ff0000');
          this.menu = null;
        }
        this.updateDom();
      }
    };

    xhr.onerror = () => {
      Log.info('Network error occurred. Unable to fetch the menu.');
      this.menu = null;
      this.updateDom();
    };

    xhr.send();
  },

  getMenuTable: function () {
    if (!this.menu) { 
      return document.createTextNode("No menu available yet.");
    }

    const currentDate = moment().format("YYYY-MM-DD");
    const menuForCurrentDate = this.menu.days.find((day) => day.date === currentDate);

    if (!menuForCurrentDate) {
      return document.createTextNode("No menu available for today.");
    }

    const table = document.createElement("table");
    table.classList.add("mensa-table");

    const filteredDishes = menuForCurrentDate.dishes.filter((dish) => {
      if (this.config.dishTypeFilter) {
        if (Array.isArray(this.config.dishTypeFilter)) {
          return this.config.dishTypeFilter.includes("ALL") || this.config.dishTypeFilter.some((filter) => {
            if (filter === "Tagesgericht") {
              return dish.dish_type.includes("Tagesgericht");
            } else if (filter === "Aktionsessen") {
              return dish.dish_type.includes("Aktionsessen") || dish.dish_type.startsWith("Aktions");
            } else {
              return dish.dish_type === filter;
            }
          });
        } else {
          if (this.config.dishTypeFilter === "ALL") {
            return true;
          } else if (this.config.dishTypeFilter === "Tagesgericht") {
            return dish.dish_type.includes("Tagesgericht");
          } else if (this.config.dishTypeFilter === "Aktionsessen") {
            return dish.dish_type.includes("Aktionsessen") || dish.dish_type.startsWith("Aktions");
          } else {
            return dish.dish_type === this.config.dishTypeFilter;
          }
        }
      }
      return true;
    });

    // Split into main dishes and desserts
    const mainDishes = filteredDishes.filter(dish => !dish.dish_type.includes("Dessert"));
    const desserts = filteredDishes.filter(dish => dish.dish_type.includes("Dessert"));

    const tbody = document.createElement("tbody");

    // Helper to render a dish row
    const renderDish = (dish) => {
      const row = document.createElement("tr");
      const dishName = document.createElement("td");
      dishName.textContent = dish.name;
      const emoji = document.createElement("td");

      if (dish.labels && dish.labels.includes("MEAT")) {
        emoji.textContent = "🍖";
      } else if (dish.labels && dish.labels.includes("VEGETARIAN")) {
        emoji.textContent = "🥕";
      } else if (dish.labels && dish.labels.includes("VEGAN")) {
        emoji.textContent = "🌱";
      }

      row.appendChild(dishName);
      row.appendChild(emoji);
      tbody.appendChild(row);
    };

    // Render main dishes (no header, just the dishes)
    mainDishes.forEach(renderDish);

    // Render desserts with header
    if (desserts.length > 0) {
      const headerRow = document.createElement("tr");
      headerRow.className = "section-header";
      const headerCell = document.createElement("td");
      headerCell.colSpan = 2;
      headerCell.textContent = "Desserts";
      headerRow.appendChild(headerCell);
      tbody.appendChild(headerRow);

      desserts.forEach(renderDish);
    }

    table.appendChild(tbody);

    return table;
  },

  validateConfig: function (config) {
    if (!config.canteen) {
      Log.info("The 'canteen' property is required in the module configuration.");
    }
    if (config.dishTypeFilter && typeof config.dishTypeFilter !== "string" && !Array.isArray(config.dishTypeFilter)) {
      Log.info("The 'dishTypeFilter' property, if provided, must be a string or an array of strings.");
    }
  },

  getDom: function () {
    const wrapper = document.createElement("div");
    wrapper.className = "mensa-wrapper";
    wrapper.appendChild(this.getMenuTable());
    return wrapper;
  }
});
