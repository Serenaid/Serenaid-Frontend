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

let IconNext: FunctionComponent<Props> = ({ size=22, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M269.226667 857.173333c-24.32 0-48.213333-6.4-70.4-19.2a138.752 138.752 0 0 1-70.4-122.026666V307.626667c0-50.773333 26.453333-96.426667 70.4-122.026667 44.373333-25.6 96.853333-25.6 140.8 0l353.706666 203.946667c43.946667 25.6 70.4 71.253333 70.4 122.026666s-26.453333 96.426667-70.4 122.026667l-353.706666 203.946667c-22.186667 13.226667-46.08 19.626667-70.4 19.626666z m0-626.346666a76.672 76.672 0 0 0-76.8 76.8v408.32c0 27.733333 14.506667 52.48 38.4 66.56 23.893333 13.653333 52.906667 14.08 76.8 0l353.706666-203.946667c23.893333-14.08 38.4-38.826667 38.4-66.56s-14.506667-52.48-38.4-66.56L307.626667 241.493333c-11.946667-6.826667-25.173333-10.666667-38.4-10.666666zM863.573333 807.68c-17.493333 0-32-14.506667-32-32V248.32c0-17.493333 14.506667-32 32-32s32 14.506667 32 32v527.36c0 17.493333-14.08 32-32 32z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};


IconNext = React.memo ? React.memo(IconNext) : IconNext;

export default IconNext;
