package com.thebookofspices;

import android.app.Application;

import com.facebook.react.ReactPackage;
import com.reactnativenavigation.NavigationApplication;
import com.airbnb.android.react.lottie.LottiePackage;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends NavigationApplication {
  @Override
  public boolean isDebug() {
    // Make sure you are using BuildConfig from your own application
    return BuildConfig.DEBUG;
  }

  protected List<ReactPackage> getPackages() {
    return Arrays.<ReactPackage>asList(
      new LottiePackage()
    );
  }

  @Override
  public List<ReactPackage> createAdditionalReactPackages() {
    return getPackages();
  }

  @Override
  public String getJSMainModuleName() {
    return "index";
  }
}
