import {ButtonPresets, ButtonUI} from './Buttontypes';

export const buttonPresets: Record<
  ButtonPresets,
  {
    default: ButtonUI;
    disabled: ButtonUI;
  }
> = {
  primary: {
    default: {
      container: {
        backgroundColor: 'buttonPrimary',
      },
      content: {
        color: 'primaryContrast',
      },
    },
    disabled: {
      container: {
        backgroundColor: 'gray4',
      },
      content: {
        color: 'gray2',
      },
    },
  },
  outline: {
    default: {
      container: {
        borderWidth: 1,
        borderColor: 'buttonPrimary',
      },
      content: {
        color: 'buttonPrimary',
      },
    },
    disabled: {
      container: {
        borderWidth: 1,
        borderColor: 'gray4',
      },
      content: {
        color: 'gray2',
      },
    },
  },
};
