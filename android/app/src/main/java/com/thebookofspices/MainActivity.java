package com.thebookofspices;

import com.reactnativenavigation.controllers.SplashActivity;

import android.widget.LinearLayout;
import android.graphics.Color;

public class MainActivity extends SplashActivity {
  @Override
  public LinearLayout createSplashLayout() {
    LinearLayout view = new LinearLayout(this);
    view.setBackgroundColor(Color.parseColor("#ffffff"));
    return view;
  }
}
