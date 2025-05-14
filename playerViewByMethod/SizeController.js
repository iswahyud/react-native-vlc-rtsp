/**
 * Modify by iswahyudi on 2023/9/18
 */
import { Dimensions, PixelRatio, Platform, StatusBar } from 'react-native';
let initialDeviceHeight = 667;
let initialDeviceWidth = 375;
let initialPixelRatio = 2;
let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;
let pixelRatio = PixelRatio.get();
let statusBarHeight = 20; //Tinggi bilah status awal
let topBarHeight = 44; //Ketinggian bilah navigasi awal
let tabBarHeight = 49; //Tinggi bilah tab awal
let IS_IPHONEX = false;
let changeRatio = Math.min(
  deviceHeight / initialDeviceHeight,
  deviceWidth / initialDeviceWidth,
); //pixelRatio/initialPixelRatio;

let pxWidth = deviceWidth * pixelRatio;

changeRatio = changeRatio.toFixed(2);
if (deviceWidth > 375 && deviceWidth <= 1125 / 2) {
  statusBarHeight = 27;
  topBarHeight = 66;
  tabBarHeight = 60;
} else if (deviceWidth > 1125 / 2) {
  statusBarHeight = 30;
  topBarHeight = 66;
  tabBarHeight = 60;
}

/**
 * iphone4 ---- iphone6
 */
if (pxWidth <= 750) {
  statusBarHeight = 40 / pixelRatio;
  topBarHeight = 44 / pixelRatio;
  tabBarHeight = 49 / pixelRatio;
} else if (750 < pxWidth && pxWidth <= 1125) {
  statusBarHeight = 54 / pixelRatio;
  topBarHeight = 132 / pixelRatio;
  tabBarHeight = 147 / pixelRatio;
} else {
  statusBarHeight = 60 / pixelRatio;
  topBarHeight = 132 / pixelRatio;
  tabBarHeight = 147 / pixelRatio;
}

if (Platform.OS !== 'ios') {
  statusBarHeight = 20;
  if (deviceWidth > 375 && deviceWidth <= 1125 / 2) {
    statusBarHeight = 25;
  } else if (deviceWidth > 1125 / 2 && deviceWidth < 812) {
    statusBarHeight = 25;
  }
  if (StatusBar.currentHeight) {
    statusBarHeight = StatusBar.currentHeight;
  }
}

if (deviceWidth >= 375 && deviceWidth < 768) {
  changeRatio = 1;
}
if (deviceHeight >= 812) {
  statusBarHeight = 44;
  IS_IPHONEX = true;
}

export function getStatusBarHeight() {
  return statusBarHeight;
}

export function getTopBarHeight() {
  return topBarHeight;
}

export function getTabBarHeight() {
  return tabBarHeight;
}

export function getTopHeight() {
  if (Platform.OS === 'ios') {
    return topBarHeight + statusBarHeight;
  } else {
    return topBarHeight + statusBarHeight;
  }
}

export function getChangeRatio() {
  return changeRatio;
}

export function getTabBarRatio() {
  return tabBarHeight / 49;
}

export function getTopBarRatio() {
  return changeRatio;
}

export function isIphoneX() {
  return IS_IPHONEX;
}
