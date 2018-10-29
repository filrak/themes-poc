// This 'theme' property can be any other theme than default. Let's assume it's an npm package we don't have direct access to it
import { Theme } from './theme-default'
// it's great that it's completely encapsulated because we can easly upgrade our theme
// but what fi we want to extend it by replacing some of the components with our own?
// Inside Theme object we are keeping all Components and Pages that'll be later used to register the theme.
// Keeping this in mind we can easly replace any of themes default components with our own.
// Let's import HelloOverride component from our local enviroment to override theme's Hello component
// comment this out to override theme default component with the one we provided

// import HelloOverride from './theme-overrides/HelloOverride.vue'
// Theme.components.Hello = HelloOverride

export default Theme