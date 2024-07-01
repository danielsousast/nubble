import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '@/main/navigator';
import {Box, BoxProps, Icon, SimpleLogo} from '@/presentation/components';
import {useAppSafeArea} from '@/presentation/hooks';

export function HomeHeader() {
  const {top} = useAppSafeArea();
  const navigation = useNavigation();

  function navigateToSearch() {
    navigation.navigate(Routes.SEARCH);
  }

  return (
    <Box {...$wrapper} style={{paddingTop: top}}>
      <SimpleLogo width={70} />
      <Box flexDirection="row">
        <Box mr="s24">
          <Icon onPress={navigateToSearch} name="search" />
        </Box>
        <Box mr="s24">
          <Icon name="bell" />
        </Box>
        <Icon name="comment" />
      </Box>
    </Box>
  );
}

const $wrapper: BoxProps = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingBottom: 's24',
  paddingHorizontal: 's24',
};
