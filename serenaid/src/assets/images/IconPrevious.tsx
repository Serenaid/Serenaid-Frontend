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

let IconPrevious: FunctionComponent<Props> = ({ size=22, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M754.773333 857.173333c-24.32 0-48.213333-6.4-70.4-19.2l-353.706666-203.946666A140.117333 140.117333 0 0 1 260.266667 512c0-50.773333 26.453333-96.426667 70.4-122.026667l353.706666-203.946666c43.946667-25.6 96.426667-25.6 140.8 0s70.4 70.826667 70.4 122.026666v408.32c0 50.773333-26.453333 96.426667-70.4 122.026667-22.186667 12.373333-46.08 18.773333-70.4 18.773333z m0-626.346666c-13.226667 0-26.453333 3.413333-38.4 10.24L362.666667 445.013333c-23.893333 14.08-38.4 38.826667-38.4 66.56s14.506667 52.48 38.4 66.56l353.706666 203.946667c23.893333 14.08 52.906667 14.08 76.8 0s38.4-38.826667 38.4-66.56V307.2c0-27.733333-14.506667-52.48-38.4-66.56-11.946667-5.973333-25.173333-9.813333-38.4-9.813333zM160.426667 807.68c-17.493333 0-32-14.506667-32-32V248.32c0-17.493333 14.506667-32 32-32s32 14.506667 32 32v527.36c0 17.493333-14.506667 32-32 32z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};


IconPrevious = React.memo ? React.memo(IconPrevious) : IconPrevious;

export default IconPrevious;
