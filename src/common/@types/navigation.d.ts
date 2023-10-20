import {RootParamList as RootStackParamList} from '@/main/navigator/Navigator';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
