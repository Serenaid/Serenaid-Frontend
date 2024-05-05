/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { Svg, GProps, Path } from 'react-native-svg';
import { getIconColor } from './helper';

interface Props extends GProps, ViewProps {
  size?: number;
  color?: string | string[];
}

let IconPause: FunctionComponent<Props> = ({ size=22, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M368.64 928H213.76c-79.36 0-117.76-36.693333-117.76-112.64V208.64c0-75.946667 38.4-112.64 117.76-112.64h154.88c79.36 0 117.76 36.693333 117.76 112.64v606.72c0 75.946667-38.4 112.64-117.76 112.64z m-154.88-768c-46.08 0-53.76 11.52-53.76 48.64v606.72c0 37.12 7.253333 48.64 53.76 48.64h154.88c46.08 0 53.76-11.52 53.76-48.64V208.64c0-37.12-7.253333-48.64-53.76-48.64H213.76zM810.24 928h-154.88c-79.36 0-117.76-36.693333-117.76-112.64V208.64c0-75.946667 38.4-112.64 117.76-112.64h154.88c79.36 0 117.76 36.693333 117.76 112.64v606.72c0 75.946667-38.4 112.64-117.76 112.64z m-154.88-768c-46.08 0-53.76 11.52-53.76 48.64v606.72c0 37.12 7.253333 48.64 53.76 48.64h154.88c46.08 0 53.76-11.52 53.76-48.64V208.64c0-37.12-7.253333-48.64-53.76-48.64h-154.88z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};


IconPause = React.memo ? React.memo(IconPause) : IconPause;

export default IconPause;
