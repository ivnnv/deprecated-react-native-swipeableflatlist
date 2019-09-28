/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @flow
 */

'use strict';
import * as React from 'react';
import {Image, Text, TouchableHighlight, View} from 'react-native';

import type {DeprecatedViewPropTypes} from 'react-native/Libraries/DeprecatedPropTypes/DeprecatedViewPropTypes';
import type {ImageSource} from 'react-native/Libraries/Image/ImageSource';

/**
 * Standard set of quick action buttons that can, if the user chooses, be used
 * with SwipeableListView. Each button takes an image and text with optional
 * formatting.
 */
class SwipeableQuickActionButton extends React.Component<{
  accessibilityLabel?: string,
  imageSource?: ?(ImageSource | number),
  /* $FlowErrorExpected(>=0.82.0 site=react_native_fb) This comment suppresses an error
   * found when Flow v0.82 was deployed. To see the error delete this comment
   * and run Flow. */
  imageStyle?: ?DeprecatedViewPropTypes.style,
  mainView?: ?React.Node,
  onPress?: Function,
  /* $FlowErrorExpected(>=0.82.0 site=react_native_fb) This comment suppresses an error
   * found when Flow v0.82 was deployed. To see the error delete this comment
   * and run Flow. */
  style?: ?DeprecatedViewPropTypes.style,
  /* $FlowErrorExpected(>=0.82.0 site=react_native_fb) This comment suppresses an error
   * found when Flow v0.82 was deployed. To see the error delete this comment
   * and run Flow. */
  containerStyle?: ?DeprecatedViewPropTypes.style,
  testID?: string,
  text?: ?(string | Object | Array<string | Object>),
  /* $FlowErrorExpected(>=0.82.0 site=react_native_fb) This comment suppresses an error
   * found when Flow v0.82 was deployed. To see the error delete this comment
   * and run Flow. */
  textStyle?: ?DeprecatedViewPropTypes.style,
}> {
  render(): React.Node {
    if (!this.props.imageSource && !this.props.text && !this.props.mainView) {
      return null;
    }
    const mainView = this.props.mainView ? (
      this.props.mainView
    ) : (
      <View style={this.props.style}>
        <Image
          accessibilityLabel={this.props.accessibilityLabel}
          source={this.props.imageSource}
          style={this.props.imageStyle}
        />
        <Text style={this.props.textStyle}>{this.props.text}</Text>
      </View>
    );
    return (
      <TouchableHighlight
        onPress={this.props.onPress}
        testID={this.props.testID}
        underlayColor="transparent"
        style={this.props.containerStyle}>
        {mainView}
      </TouchableHighlight>
    );
  }
}

module.exports = SwipeableQuickActionButton;
