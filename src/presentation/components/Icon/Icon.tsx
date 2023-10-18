import React from 'react';
import EyeOnIcon from '@/common/assets/icons/eye-on.svg';
import ArrowLeftIcon from '@/common/assets/icons/arrow-left.svg';
import ArrowRightIcon from '@/common/assets/icons/arrow-right.svg';
import BellIcon from '@/common/assets/icons/bell.svg';
import BellOnIcon from '@/common/assets/icons/bell-on.svg';
import BookmarkFillIcon from '@/common/assets/icons/bookmark-fill.svg';
import BookmarkIcon from '@/common/assets/icons/bookmark.svg';
import CameraIcon from '@/common/assets/icons/camera.svg';
import ChatIcon from '@/common/assets/icons/chat.svg';
import ChatOnIcon from '@/common/assets/icons/chat-on.svg';
import CheckIcon from '@/common/assets/icons/check.svg';
import ChevronRightIcon from '@/common/assets/icons/chevron-right.svg';
import CommentIcon from '@/common/assets/icons/comment.svg';
import EyeOffIcon from '@/common/assets/icons/eye-off.svg';
import FlashOffIcon from '@/common/assets/icons/flash-off.svg';
import FlashOnIcon from '@/common/assets/icons/flash-on.svg';
import HeartFillIcon from '@/common/assets/icons/heart-fill.svg';
import HeartIcon from '@/common/assets/icons/heart.svg';
import HomeFillIcon from '@/common/assets/icons/home-fill.svg';
import HomeIcon from '@/common/assets/icons/home.svg';
import MessageIcon from '@/common/assets/icons/message.svg';
import NewPostIcon from '@/common/assets/icons/new-post.svg';
import ProfileFillIcon from '@/common/assets/icons/profile-fill.svg';
import ProfileIcon from '@/common/assets/icons/profile.svg';
import SearchIcon from '@/common/assets/icons/search.svg';
import SettingsIcon from '@/common/assets/icons/settings.svg';
import TrashIcon from '@/common/assets/icons/trash.svg';
import {useAppTheme} from '../../hooks/useAppTheme';
import {ThemeColors} from '@/common/theme/theme';

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
  ['comment']: CommentIcon,
  ['chevron-right']: ChevronRightIcon,
  ['eye-on']: EyeOnIcon,
  ['eye-off']: EyeOffIcon,
  ['flash-on']: FlashOnIcon,
  ['flash-off']: FlashOffIcon,
  ['heart']: HeartIcon,
  ['heart-ill']: HeartFillIcon,
  ['home']: HomeIcon,
  ['home-fill']: HomeFillIcon,
  ['message']: MessageIcon,
  ['new-post']: NewPostIcon,
  ['profile']: ProfileIcon,
  ['profile-fill']: ProfileFillIcon,
  ['search']: SearchIcon,
  ['settings']: SettingsIcon,
  ['trash']: TrashIcon,
};

type IconType = typeof iconRegistry;
type IconName = keyof IconType;
interface Props {
  name: IconName;
  size?: number;
  color?: ThemeColors;
}

export const Icon = ({size, name, color = 'backgroundContrast'}: Props) => {
  const {colors} = useAppTheme();
  const SVGIcon = iconRegistry[name];
  return <SVGIcon width={size} height={size} fill={colors[color]} />;
};
