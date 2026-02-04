# MMM-Mensa

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![MagicMirror²](https://img.shields.io/badge/MagicMirror²-Module-blueviolet)](https://magicmirror.builders/)
<img src="https://img.shields.io/badge/Maintained%3F-yes-green.svg"/>

A MagicMirror² module to display daily menu information from Munich university canteens (Studierendenwerk München Oberbayern).

> **Note:** This module is an improved fork of [MMM-Mensamuc](https://github.com/wiesty/MMM-Mensamuc) by [wiesty](https://github.com/wiesty). Many thanks to the original creator for the foundation!

**Data provided by [eat-api by TUM-DEV](https://github.com/TUM-Dev/eat-api/)**

<!-- TODO: Add screenshot -->
<img width="400" alt="Module Screenshot" src="https://via.placeholder.com/400x200?text=Screenshot+Coming+Soon" />

## Features

- **Daily menu display** from Munich university canteens
- **Diet indicators** with intuitive emojis:
  - 🍖 Meat dishes
  - 🥕 Vegetarian dishes
  - 🌱 Vegan dishes
- **Dish type filtering** - show only specific menu categories
- **Dessert section** - automatically grouped separately
- **Clean, minimal UI** - matches MagicMirror aesthetic
- **Auto-refresh** - updates hourly

## Requirements

- An instance of [MagicMirror²](https://github.com/MagicMirrorOrg/MagicMirror)

## Installation

1. Navigate to your MagicMirror modules directory:

```bash
cd ~/MagicMirror/modules
```

2. Clone this repository:

```bash
git clone https://github.com/daniensi/MMM-Mensa.git
```

3. Add the configuration to your `config.js` (see below)

## Configuration

Add the module to your `config.js`:

```js
{
    module: "MMM-Mensa",
    position: "bottom_right",
    config: {
        canteen: "mensa-garching",                          // Your canteen
        dishTypeFilter: ["Tagesgericht", "Aktionsessen"]    // Filter dish types
    }
}
```

### Configuration Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `canteen` | String | `"mensa-garching"` | **Required.** The canteen API key (see table below) |
| `dishTypeFilter` | Array | `["ALL"]` | Filter by dish type. Use `["ALL"]` to show everything |

### Common Dish Type Filters

| Filter | Description |
|--------|-------------|
| `"ALL"` | Show all dishes |
| `"Tagesgericht"` | Daily specials (numbered 1-4) |
| `"Aktionsessen"` | Special/promotional dishes |
| `"Beilagen"` | Side dishes |
| `"Dessert"` | Desserts (automatically grouped) |

## Supported Canteens

| Name | API Key | Address |
|------|---------|---------|
| Mensa Arcisstraße | `mensa-arcisstr` | [Arcisstraße 17, München](https://www.google.com/maps?q=Arcisstraße+17,+München) |
| Mensa Garching | `mensa-garching` | [Boltzmannstraße 19, Garching](https://www.google.com/maps?q=Boltzmannstraße+19,+Garching) |
| Mensa Leopoldstraße | `mensa-leopoldstr` | [Leopoldstraße 13a, München](https://www.google.com/maps?q=Leopoldstraße+13a,+München) |
| Mensa Lothstraße | `mensa-lothstr` | [Lothstraße 13d, München](https://www.google.com/maps?q=Lothstraße+13d,+München) |
| Mensa Martinsried | `mensa-martinsried` | [Großhaderner Straße 6, Planegg-Martinsried](https://www.google.com/maps?q=Großhaderner%20Straße+6,+Planegg-Martinsried) |
| Mensa Pasing | `mensa-pasing` | [Am Stadtpark 20, München](https://www.google.com/maps?q=Am%20Stadtpark+20,+München) |
| Mensa Weihenstephan | `mensa-weihenstephan` | [Maximus-von-Imhof-Forum 5, Freising](https://www.google.com/maps?q=Maximus-von-Imhof-Forum+5,+Freising) |
| StuBistro Arcisstraße | `stubistro-arcisstr` | [Arcisstraße 12, München](https://www.google.com/maps?q=Arcisstraße+12,+München) |
| StuBistro Goethestraße | `stubistro-goethestr` | [Goethestraße 70, München](https://www.google.com/maps?q=Goethestraße+70,+München) |
| StuBistro Großhadern | `stubistro-großhadern` | [Butenandtstraße 13, München](https://www.google.com/maps?q=Butenandtstraße+13,+Gebäude+F,+München) |
| StuBistro Rosenheim | `stubistro-rosenheim` | [Hochschulstraße 1, Rosenheim](https://www.google.com/maps?q=Hochschulstraße+1,+Rosenheim) |
| StuBistro Schellingstraße | `stubistro-schellingstr` | [Schellingstraße 3, München](https://www.google.com/maps?q=Schellingstraße+3,+München) |
| StuBistro Martinsried | `stubistro-martinsried` | [Großhadernerstr. 9a, Planegg-Martinsried](https://www.google.com/maps/place/Großhaderner+Str.+9,+82152+Planegg) |
| StuCafé Adalbertstraße | `stucafe-adalbertstr` | [Adalbertstraße 5, München](https://www.google.com/maps?q=Adalbertstraße+5,+München) |
| StuCafé Akademie Weihenstephan | `stucafe-akademie-weihenstephan` | [Alte Akademie 1, Freising](https://www.google.com/maps?q=Alte%20Akademie+1,+Freising) |
| StuCafé Weihenstephan-Maximus | `stucafe-weihenstephan-maximus` | [Maximus-von-Imhof-Forum 5, Freising](https://www.google.com/maps/place/Maximus-von-Imhof-Forum+5,+85354+Freising) |
| StuCafé Boltzmannstraße | `stucafe-boltzmannstr` | [Boltzmannstraße 15, Garching](https://www.google.com/maps?q=Boltzmannstraße+15,+Garching) |
| StuCafé in der Mensa Garching | `stucafe-garching` | [Boltzmannstraße 19, Garching](https://www.google.com/maps?q=Boltzmannstraße+19,+Garching) |
| StuCafé Karlstraße | `stucafe-karlstr` | [Karlstraße 6, München](https://www.google.com/maps?q=Karlstraße+6,+München) |
| StuCafé Pasing | `stucafe-pasing` | [Am Stadtpark 20, München](https://www.google.com/maps?q=Am%20Stadtpark+20,+München) |
| FMI Bistro Garching | `fmi-bistro` | [Boltzmannstraße 3, Garching](https://www.google.com/maps?q=Boltzmannstraße+3,+Garching) |
| IPP Bistro Garching | `ipp-bistro` | [Boltzmannstraße 2, Garching](https://goo.gl/maps/vYdsQhgxFvH2) |

## Project Structure

```
MMM-Mensa/
├── MMM-Mensa.js        # Main module logic
├── MMM-Mensa.css       # Styling
├── LICENSE             # MIT License
└── README.md           # This file
```

## How It Works

1. **Data Fetching** - Retrieves weekly menu from the [TUM eat-api](https://github.com/TUM-Dev/eat-api/)
2. **Day Filtering** - Shows only today's menu items
3. **Type Filtering** - Applies dish type filters from configuration
4. **Diet Detection** - Identifies meat/vegetarian/vegan based on labels
5. **Section Grouping** - Automatically separates desserts into their own section
6. **Auto-Refresh** - Updates every hour to catch menu changes

## Improvements Over Original

This fork adds several enhancements over the original [MMM-Mensamuc](https://github.com/wiesty/MMM-Mensamuc):

- **Cleaner UI** - Refined styling matching the MMM-MVG aesthetic
- **Dessert grouping** - Desserts automatically shown in a separate section
- **Better emoji indicators** - 🌱 for vegan (instead of 🥦)
- **Compact layout** - Optimized spacing and typography
- **Improved filtering** - Better handling of Aktionsessen variants

## Menu Availability Note

If you see "No menu available yet", this is normal behavior. The menus are typically refreshed at the beginning of each week. The module will automatically update when new menus are published.

## License

MIT License - See [LICENSE](LICENSE) for details.

---

**Original module by [wiesty](https://github.com/wiesty) • Data by [TUM-DEV](https://github.com/TUM-Dev/eat-api/) • Enhanced with ❤️ for the MagicMirror community**
