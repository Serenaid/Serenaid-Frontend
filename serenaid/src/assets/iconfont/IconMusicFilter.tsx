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

let IconMusicFilter: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M938.666667 160H85.333333c-17.493333 0-32-14.506667-32-32s14.506667-32 32-32h853.333334c17.493333 0 32 14.506667 32 32s-14.506667 32-32 32zM469.333333 416H85.333333c-17.493333 0-32-14.506667-32-32s14.506667-32 32-32h384c17.493333 0 32 14.506667 32 32s-14.506667 32-32 32zM341.333333 672H85.333333c-17.493333 0-32-14.506667-32-32s14.506667-32 32-32h256c17.493333 0 32 14.506667 32 32s-14.506667 32-32 32zM256 928H85.333333c-17.493333 0-32-14.506667-32-32s14.506667-32 32-32h170.666667c17.493333 0 32 14.506667 32 32s-14.506667 32-32 32zM505.173333 970.666667c-68.693333 0-125.013333-55.893333-125.013333-125.013334 0-68.693333 55.893333-125.013333 125.013333-125.013333s125.013333 55.893333 125.013334 125.013333-55.893333 125.013333-125.013334 125.013334z m0-185.6a61.013333 61.013333 0 1 0 0 122.026666 61.013333 61.013333 0 0 0 0-122.026666z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M598.186667 877.653333c-17.493333 0-32-14.506667-32-32v-374.186666c0-51.626667 30.72-92.16 80.64-105.386667l185.6-50.773333c40.533333-11.093333 75.52-6.826667 100.266666 12.373333 24.746667 19.2 37.546667 50.346667 37.546667 93.44v363.093333c0 17.493333-14.506667 32-32 32s-32-14.506667-32-32V421.12c0-21.333333-4.266667-36.266667-12.373333-42.24-8.106667-6.4-24.746667-6.826667-44.8-1.28l-185.6 50.773333c-12.373333 3.413333-33.28 13.653333-33.28 43.946667v374.186667c0 17.066667-14.506667 31.146667-32 31.146666z"
        fill={getIconColor(color, 1, '#333333')}
      />
      <Path
        d="M845.653333 908.8c-68.693333 0-125.013333-55.893333-125.013333-125.013333 0-68.693333 55.893333-125.013333 125.013333-125.013334s125.013333 55.893333 125.013334 125.013334-55.893333 125.013333-125.013334 125.013333z m0-185.6a61.013333 61.013333 0 1 0 0 122.026667 61.013333 61.013333 0 0 0 0-122.026667zM598.186667 612.266667a31.872 31.872 0 0 1-8.106667-62.72l340.48-93.013334a32 32 0 1 1 16.64 61.866667l-340.48 93.013333c-2.986667 0.426667-5.973333 0.853333-8.533333 0.853334z"
        fill={getIconColor(color, 2, '#333333')}
      />
    </Svg>
  );
};

IconMusicFilter.defaultProps = {
  size: 22,
};

IconMusicFilter = React.memo ? React.memo(IconMusicFilter) : IconMusicFilter;

export default IconMusicFilter;
