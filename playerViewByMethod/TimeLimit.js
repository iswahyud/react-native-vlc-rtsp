/**
 * Modify by iswahyudi on 2023/9/18
 */
import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default class TimeLimt extends Component {
  constructor(props) {
    super(props);
    this.timer = null;
  }

  static defaultProps = {
    maxTime: 0,
  };

  state = {
    timeNumber: 0,
  };

  componentDidMount() {
    if (this.props.maxTime > 0) {
      this.timer = setInterval(this._updateTimer, 1000);
    }
  }

  _updateTimer = () => {
    let { timeNumber } = this.state;
    let { maxTime } = this.props;
    let newTimeNumber = timeNumber + 1;
    this.setState({
      timeNumber: newTimeNumber,
    });
    if (newTimeNumber >= maxTime) {
      this._onEnd();
    }
  };

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  _onEnd = () => {
    let { onEnd } = this.props;
    clearInterval(this.timer);
    onEnd && onEnd();
  };

  render() {
    let { timeNumber } = this.state;
    let { maxTime } = this.props;
    return (
      <TouchableOpacity
        style={{ flexDirection: 'row' }}
        onPress={this._onEnd}
        activeOpacity={1}>
        {maxTime > 0 && (
          <View style={styles.timeView}>
            <Text style={{ color: 'green', fontSize: 12 }}>{maxTime - timeNumber}</Text>
          </View>
        )}
        <View style={styles.nameView}>
          <Text style={{ fontSize: 12 }}>Lewati Judul</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#000',
  },
  timeView: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
  nameView: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
