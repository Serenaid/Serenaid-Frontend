/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { GProps } from 'react-native-svg';
import IconMusic from './IconMusic';
import IconRepeateAll from './IconRepeateAll';
import IconShuffle from './IconShuffle';
import IconRepeateOne from './IconRepeateOne';
import IconMusicFilter from './IconMusicFilter';
export { default as IconMusic } from './IconMusic';
export { default as IconRepeateAll } from './IconRepeateAll';
export { default as IconShuffle } from './IconShuffle';
export { default as IconRepeateOne } from './IconRepeateOne';
export { default as IconMusicFilter } from './IconMusicFilter';

export type IconNames = 'music' | 'repeate-all' | 'shuffle' | 'repeate-one' | 'music-filter';

interface Props extends GProps, ViewProps {
  name: IconNames;
  size?: number;
  color?: string | string[];
}

let IconFont: FunctionComponent<Props> = ({ name, ...rest }) => {
  switch (name) {
    case 'music':
      return <IconMusic key="1" {...rest} />;
    case 'repeate-all':
      return <IconRepeateAll key="2" {...rest} />;
    case 'shuffle':
      return <IconShuffle key="3" {...rest} />;
    case 'repeate-one':
      return <IconRepeateOne key="4" {...rest} />;
    case 'music-filter':
      return <IconMusicFilter key="5" {...rest} />;
  }

  return null;
};

IconFont = React.memo ? React.memo(IconFont) : IconFont;

export default IconFont;
