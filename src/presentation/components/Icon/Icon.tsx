import React from 'react';
import {Pressable} from 'react-native';
import {ArrowLeftIcon} from './SvgComponents/ArrowLeftIcon';
import {ArrowRightIcon} from './SvgComponents/ArrowRightIcon';
import {BellIcon} from './SvgComponents/BellIcon';
import {BellOnIcon} from './SvgComponents/BellOnIcon';
import {BookmarkFillIcon} from './SvgComponents/BookmarkFillIcon';
import {BookmarkIcon} from './SvgComponents/BookmarkIcon';
import {CameraIcon} from './SvgComponents/CameraIcon';
import {ChatIcon} from './SvgComponents/ChatIcon';
import {ChatOnIcon} from './SvgComponents/ChatOnIcon';
import {CheckIcon} from './SvgComponents/CheckIcon';
import {CheckRoundIcon} from './SvgComponents/CheckRoundIcon';
import {ChevronRightIcon} from './SvgComponents/ChevronRightIcon';
import {CommentIcon} from './SvgComponents/CommentIcon';
import {ErrorRoundIcon} from './SvgComponents/ErrorRoundIcon';
import {EyeOffIcon} from './SvgComponents/EyeOffIcon';
import {EyeOnIcon} from './SvgComponents/EyeOnIcon';
import {FlashOffIcon} from './SvgComponents/FlashOffIcon';
import {FlashOnIcon} from './SvgComponents/FlashOnIcon';
import {HeartFillIcon} from './SvgComponents/HeartFillIcon';
import {HeartIcon} from './SvgComponents/HeartIcon';
import {HomeFillIcon} from './SvgComponents/HomeFillIcon';
import {HomeIcon} from './SvgComponents/HomeIcon';
import {MessageIcon} from './SvgComponents/MessageIcon';
import {MessageRoundIcon} from './SvgComponents/MessageRoundIcon';
import {NewPostIcon} from './SvgComponents/NewPostIcon';
import {ProfileFillIcon} from './SvgComponents/ProfileFillIcon';
import {ProfileIcon} from './SvgComponents/ProfileIcon';
import {SearchIcon} from './SvgComponents/SearchIcon';
import {SettingsIcon} from './SvgComponents/SettingsIcon';
import {TrashIcon} from './SvgComponents/TrashIcon';
import {ThemeColors} from '@/common/theme/theme';
import {useAppTheme} from '@/presentation/hooks';

export interface IconBase {
  size?: number;
  color?: string;
}

export interface IconProps {
  name: IconName;
  color?: ThemeColors;
  size?: number;
  onPress?: () => void;
}
export function Icon({
  name,
  color = 'backgroundContrast',
  size,
  onPress,
}: IconProps) {
  const {colors} = useAppTheme();
  const SVGIcon = iconRegistry[name];

  if (onPress) {
    return (
      <Pressable testID={name} hitSlop={10} onPress={onPress}>
        <SVGIcon color={colors[color]} size={size} />
      </Pressable>
    );
  }

  return <SVGIcon color={colors[color]} size={size} />;
}

const iconRegistry = {
  ['arrow-left']: ArrowLeftIcon,
  ['arrow-right']: ArrowRightIcon,
  ['bell']: BellIcon,
  ['bell-on']: BellOnIcon,
  ['bookmark']: BookmarkIcon,
  ['bookmark-fill']: BookmarkFillIcon,
  ['camera']: CameraIcon,
  ['chat']: ChatIcon,
  ['chat-on']: ChatOnIcon,
  ['check']: CheckIcon,
  ['check-round']: CheckRoundIcon,
  ['error-round']: ErrorRoundIcon,
  ['comment']: CommentIcon,
  ['chevron-right']: ChevronRightIcon,
  ['eye-on']: EyeOnIcon,
  ['eye-off']: EyeOffIcon,
  ['flash-on']: FlashOnIcon,
  ['flash-off']: FlashOffIcon,
  ['heart']: HeartIcon,
  ['heart-fill']: HeartFillIcon,
  ['home']: HomeIcon,
  ['home-fill']: HomeFillIcon,
  ['message']: MessageIcon,
  ['message-round']: MessageRoundIcon,
  ['new-post']: NewPostIcon,
  ['profile']: ProfileIcon,
  ['profile-fill']: ProfileFillIcon,
  ['search']: SearchIcon,
  ['settings']: SettingsIcon,
  ['trash']: TrashIcon,
};

type IconType = typeof iconRegistry;

type IconName = keyof IconType;
