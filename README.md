# Capstone Project: Enjoy the Outdoors

Build a website to help users find enjoyable outdoor activities, focusing on national parks and mountains. Utilize your knowledge of HTML, CSS, and JavaScript to complete this project. Research skills will also be necessary to overcome any obstacles you encounter.

## Basic Requirements

To complete the project, the website should include the following:

- **Homepage:** Highlight our organization and provide links to a National Parks search page and a Mountains information page.

- **National Parks Search Page:** Allow users to search for national parks based on location and park type. Data is provided in `nationalparks.json`.

- **Mountains Information Page:** Provide details of 48 different mountains. Data is available in `mountains.json`.

> **NOTE:** Ensure the completion of the basic requirements before attempting any optional features.

## Implementation Details

The following are implementation requirements and details for the National Parks search page, Mountains Information page, stretch goals, and general implementation hints.

### National Parks Search Page

This page enables users to search for national parks based on location or park type. The parks data is available in `nationalparks.json`. There are two search options:

- **Search by Location:** Users can select a state/territory from a dropdown menu populated with values from `locations.json`. Match parks with the selected location based on the "State" property.

> **NOTE:** Completing the Search by Location is the highest priority.

- **Search by Park Type:** Users can select a description from a dropdown menu populated with values from `parktypes.json`. Match parks with the selected description by checking if the park's "LocationName" property contains the description.

The presentation of the two search options is a challenge. You can use radio buttons or a dropdown menu with options to select the search type.

#### National Parks Search Page Stretch Goals

Consider the following stretch goals as low-priority tasks:

- Add a "View All National Parks" option.
- Display a hyperlink to the park's website, if available, so users can visit it. Open the link in a new tab or window.

#### IMPLEMENTATION HINTS

- Load data from three JSON files into your application.
- Prioritize loading the options for the search types before implementing the actual search functionality. Options include:
  - Using radio buttons to select the search type (By Location/By Park Type) and show/hide different dropdowns with search criteria.
  - Using a dropdown menu to select the search type and show/hide different dropdowns based on the selection.
  - Dynamically load options into a single dropdown menu based on the search type.
- It is recommended to focus on getting the "Search by Location" feature working first.
- When implementing the "Search by Park Type," ensure that the search strings have the same casing. Use `.toLowerCase()` or `.toUpperCase()` to achieve this.

### Mountains Information Page

This page provides a dropdown menu listing the 48 mountains available in `mountains.json`. When a mountain is selected, display its information, including name, description, elevation, and any other interesting details.

> **NOTE:** This page does not support searching mountains using filters.

#### Mountain Information Page Stretch Goals

Consider the following stretch goals as low-priority tasks:

- Display an image of the mountain along with its information.
- Show the sunrise and sunset times "today" for each mountain, using the provided code snippet. Note that the times are in UTC and not adjusted for local variations.

> NOTE: The mountain data includes latitude and longitude values required for the code snippet. Label the output as UTC time.

## What Makes a Good Capstone Project?

A good capstone project should include:

- Consistent design and intuitive navigation throughout the website.
- Implementation of at least the required pages.
