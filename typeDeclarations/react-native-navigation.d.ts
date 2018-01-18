declare module 'react-native-navigation' {
  export interface NavigatorStyle {
    navBarTextColor?: string;
    navBarBackgroundColor?: string;
    navBarButtonColor?: string;
    navBarHidden?: boolean;
    navBarHideOnScroll?: boolean;
    navBarTranslucent?: boolean;
    navBarNoBorder?: boolean;
    drawUnderNavBar?: boolean;
    drawUnderTabBar?: boolean;
    statusBarBlur?: boolean;
    navBarBlur?: boolean;
    tabBarHidden?: boolean;
    statusBarHideWithNavBar?: boolean;
    statusBarHidden?: boolean;
    statusBarTextColorScheme?: string;
  }

  export interface NavigatorButtons {
    leftButtons?: NavigatorButton[];
    rightButtons?: NavigatorButton[];
  }

  export interface NavigatorButton {
    id: string;
    icon?: any;
    title?: string;
    testID?: string;
    disabled?: boolean;
  }

  export interface Drawer {
    left?: {
      screen: string;
    };
    right?: {
      screen: string;
    };
    disableOpenGesture?: boolean;
  }

  export interface TabBasedApp {
    tabs: TabScreen[],
    tabsStyle?: {
      tabBarButtonColor: string;
      tabBarSelectedButtonColor: string;
      tabBarBackgroundColor: string;
    };
    drawer?: Drawer;
    passProps?: Object;
    animationType?: string;
  }

  export interface SingleScreenApp {
    screen: Screen,
    drawer?: Drawer;
    passProps?: Object;
    animationType?: string;
  }

  export interface TabScreen {
    label?: string;
    screen: string;
    icon?: any;
    selectedIcon?: any;
    title?: string;
    navigatorStyle?: NavigatorStyle;
    navigatorButtons?: NavigatorButtons;
  }

  export interface Screen {
    screen: string;
    title?: string;
    navigatorStyle?: NavigatorStyle;
    navigatorButtons?: NavigatorButtons;
  }

  export interface ModalScreen extends Screen {
    passProps?: Object;
    animationType?: string;
    hideStatusBarAndroid?: boolean;
    orientation?: 'landscape' | 'portrait';
  }

  export interface PushedScreen extends ModalScreen {
    backButtonTitle?: string;
    backButtonHidden?: boolean;
  }

  export interface LightBox {
    screen: string;
    passProps?: Object;
    style?: {
      backgroundBlur: string;
      backgroundColor?: string;
    };
  }

  export class Navigation {
    static registerComponent(screenID: string, generator: () => any, store?: any, provider?: any): any;

    static registerScreen(screenId: string, generator: () => any): any;

    static startTabBasedApp(params: TabBasedApp): any;

    static startSingleScreenApp(params: SingleScreenApp): any;

    static showModal(params: ModalScreen): any;

    static dismissModal(params?: {animationType?: string}): any;

    static dismissMeasurementFlow(params?: {animationType?: string}): any;

    static dismissAllModals(params?: {animationType?: string}): any;

    static showLightBox(params: LightBox): any;

    static dismissLightBox(): any;

    static lockToPortrait(): any;

    static lockToLandscape(): any;

    static lockToSensorLandscape(): any;

    static unlockAllOrientations(): any;
    
    static showMaterialDialog(options: any): any;
  }

  export interface Navigator {
    push: (options: PushedScreen) => any;
    pop: (options?: {animated?: boolean}) => any;
    popToRoot: (options?: {animated?: boolean}) => any;
    resetTo: (options: ModalScreen) => any;
    showModal: (options: ModalScreen) => any;
    dismissModal: (options?: {animationType?: string}) => any;
    dismissMeasurementFlow: () => any;
    dismissAllModals: (options?: {animationType?: string}) => any;
    showLightBox: (options: LightBox) => any;
    dismissLightBox: () => any;
    handleDeepLink: (options: {link: string}) => any;
    setOnNavigatorEvent: (callback: (event: any) => any) => any;
    setButtons: (options: NavigatorButtons & {animated?: boolean}) => any;
    setTitle: (options: {title: string}) => any;
    toggleDrawer: (options: {side: string, animated?: boolean, to?: string}) => any;
    toggleTabs: (options: {to: string; animated?: boolean}) => any;
    setTabBadge: (options: {tabIndex?: number, badge: number}) => any;
    switchToTab: (options: {tabIndex: number}) => any;
    toggleNavBar: (options: {to: string, animated?: boolean}) => any;
  }
}