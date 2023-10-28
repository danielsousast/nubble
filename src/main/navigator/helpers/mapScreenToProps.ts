import {AppTabParamList, Routes} from '..';
import {IconProps} from '@/presentation/components';

type IconType = {
  focused: IconProps['name'];
  unfocused: IconProps['name'];
};

type MappedScreenProps = Record<
  keyof AppTabParamList,
  {
    label: string;
    icon: IconType;
  }
>;

export const mapScreenToProps: MappedScreenProps = {
  [Routes.HOME]: {
    label: 'Início',
    icon: {
      focused: 'home-fill',
      unfocused: 'home',
    },
  },
  [Routes.NEW_POST]: {
    label: 'Novo post',
    icon: {
      focused: 'new-post',
      unfocused: 'new-post',
    },
  },
  [Routes.FAVORITE]: {
    label: 'Favorito',
    icon: {
      focused: 'bookmark-fill',
      unfocused: 'bookmark',
    },
  },
  [Routes.MY_PROFILE]: {
    label: 'Meu perfil',
    icon: {
      focused: 'profile-fill',
      unfocused: 'profile',
    },
  },
};
