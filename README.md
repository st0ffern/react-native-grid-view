# react-native-grid-view
React Native`s ListView but with grid setup.

## Props

- `renderItem`: **required ** content to render items
- `dataSource`: **required ** an array of items that should be listed, standard dataSource format.
- `imagesPerRow`: optional input to set the amout of items pr row (Default: 3)
- `imageMargin`: optional input to set margins in the view  (Default: 5)
- `backgroundColor`: optional input to set background color (Default: black)

## Usage Examples

```js
var GridView = require("react-native-gridview");
// or
import GridView from "react-native-gridview"
```

```javascript
render(){
  return(
    <GridView
      renderItem={data => this.renderItem(data)}
      dataSource=[1,2,3,4,5]
      imagesPerRow={4}
      imageMargin={5}
      backgroundColor="white"
    />
  )
}
renderItem(data){
  return(
    <View onPress={console.log('clicked')}>
      <Text>{data}</Text>
    </View>
  )
}
```