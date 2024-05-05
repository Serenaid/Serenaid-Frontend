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

let IconShuffle: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M237.226667 799.573333h-0.853334l-108.8-0.426666c-17.493333 0-32-14.506667-32-32s14.506667-32 32-32l108.8 0.426666h0.426667c27.733333 0 53.76-13.653333 69.12-37.12l272.64-408.746666c27.306667-40.96 72.96-65.706667 122.453333-65.706667h0.853334l194.133333 0.853333c17.493333 0 32 14.506667 32 32s-14.506667 32-32 32l-194.133333-0.853333h-0.426667c-27.733333 0-53.76 13.653333-69.12 37.12L359.68 733.866667a145.92 145.92 0 0 1-122.453333 65.706666zM810.666667 884.48c-8.106667 0-16.213333-2.986667-22.613334-9.386667a32.170667 32.170667 0 0 1 0-45.226666l85.333334-85.333334c12.373333-12.373333 32.853333-12.373333 45.226666 0 12.373333 12.373333 12.373333 32.853333 0 45.226667l-85.333333 85.333333c-6.4 6.4-14.506667 9.386667-22.613333 9.386667zM379.306667 400.213333c-9.813333 0-19.626667-4.693333-26.026667-13.226666L307.2 322.986667a84.906667 84.906667 0 0 0-67.84-34.56L128 288.853333c-19.626667-0.426667-32-14.08-32-32 0-17.493333 14.08-32 32-32l111.36-0.426666h0.853333c47.36 0 91.733333 23.04 119.466667 61.013333l46.08 64c10.24 14.506667 7.253333 34.133333-7.253333 44.8-5.973333 3.84-12.373333 5.973333-19.2 5.973333z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M696.32 800c-45.226667 0-88.746667-21.333333-116.48-57.173333l-52.053333-66.986667c-10.666667-14.08-8.106667-34.133333 5.546666-44.8 14.08-10.666667 34.133333-8.106667 44.8 5.546667l52.053334 66.986666c15.786667 20.48 40.96 30.72 66.133333 32.426667l199.253333-0.853333a31.957333 31.957333 0 1 1 0 64l-199.253333 0.853333c0.426667 0 0 0 0 0zM896 288.853333c-8.106667 0-16.213333-2.986667-22.613333-9.386666l-85.333334-85.333334a32.170667 32.170667 0 0 1 0-45.226666c12.373333-12.373333 32.853333-12.373333 45.226667 0l85.333333 85.333333c12.373333 12.373333 12.373333 32.853333 0 45.226667-6.4 6.4-14.506667 9.386667-22.613333 9.386666z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconShuffle.defaultProps = {
  size: 22,
};

IconShuffle = React.memo ? React.memo(IconShuffle) : IconShuffle;

export default IconShuffle;
