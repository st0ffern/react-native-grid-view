import React, {Component} from 'react'
import { 
  StyleSheet
  ,View 
  ,ListView 
} from 'react-native'

import SGListView from 'react-native-sglistview'

class GridView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      var dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    };
  }
  componenteWillMount(){
    dataSource: dataSource.cloneWithRows(this.props.),
  }
  render() {
    return (
      <View
        style={[styles.wrapper, {padding: this.props.imageMargin, paddingRight: 0, backgroundColor: this.props.backgroundColor},]}>

        <SGListView
          style={{flex: 1,}}
          dataSource={this.state.dataSource}
          renderRow={rowData => this._renderRow(rowData)} />

      </View>
    )
  }
  _renderRow(rowData) {
    var items = rowData.map((item) => {
      if (item === null) {
        return null;
      }
      return (
        <View style={styles.item}>
          {this.props.renderItem(item)}
        </View>
      )
    });

    return (
      <View style={[styles.item, {marginBottom: this.props.imageMargin, marginRight: this.props.imageMargin}]}>
        {items}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper:{
    flex: 1,
  },
  row:{
    flexDirection: 'row',
    flex: 1,
  },
  item:{},
})

GridView.defaultProps = {
  imagesPerRow: 3,
  imageMargin: 5,
  backgroundColor: 'black',
}
GridView.propTypes = {
  imagesPerRow: React.PropTypes.number,
  imageMargin: React.PropTypes.number,
  backgroundColor: React.PropTypes.string,
}

module.exports = GridView
