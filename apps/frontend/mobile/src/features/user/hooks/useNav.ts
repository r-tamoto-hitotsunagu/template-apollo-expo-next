import { useNavigation } from '@react-navigation/native';
import type { UserStacks } from '../navigators';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

export const useNav = () => {
  // TODO: useCallback or useMemo
  return useNavigation<NativeStackNavigationProp<UserStacks>>();
};
