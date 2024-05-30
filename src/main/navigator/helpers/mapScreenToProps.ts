import {AppTabParamList} from '..';
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
  Home: {
    label: 'Início',
    icon: {
      focused: 'home-fill',
      unfocused: 'home',
    },
  },
  NewPost: {
    label: 'Novo post',
    icon: {
      focused: 'new-post',
      unfocused: 'new-post',
    },
  },
  Favorite: {
    label: 'Favorito',
    icon: {
      focused: 'bookmark-fill',
      unfocused: 'bookmark',
    },
  },
  MyProfile: {
    label: 'Meu perfil',
    icon: {
      focused: 'profile-fill',
      unfocused: 'profile',
    },
  },
};
