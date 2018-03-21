# Music I/O Mobile
`react-native` `android` `ios`

## Getting Started

### macOS
> We recommend installing Node and Watchman using Homebrew. 
Run the following commands in a Terminal after installing Homebrew:
````
brew install node
brew install watchman
````

> Run the following command in a Terminal:
````
npm install -g react-native-cli
````

> Run react-native run-ios inside your React Native project folder:
````
cd AwesomeProject
react-native run-ios
````


## React Component

### Functional Component
1. Used for presenting static data
2. Can't handle fetching data
3. Easy to write 

```
const Header = () => {
    return <Text> Fathan is cool </Text>
}
```

### Class Component
1. Used for dynamic source of data
2. Handles any data that might change (fetching data, user event, etc)
3. Knows when it gets rendered to the devices (useful for data fetching)
4. More code to write

```
class Header extends Component {
    render() {
        return <Text> Jan is not cool </Text>
    }
}
```

## Rules of React "state"
> State: a plain javascript object used to record and respond to user-trigerred events.

> When we need to update what a component shows, call `this.setState` not `this.state`

## Generate React Native app icons

### Installation
```
npm install -g yo generator-rn-toolbox
```

```
brew install imagemagick
```

### Usage
* Have a single icon file (200x200px is sufficient).
* In project directory, run:
```
yo -rn-toolbox:assets --icon <path to the icon>
#example: 
yo rn-toolbox:assets --icon ../icon.png
```
* Set the icon from XCode or Android Studio
