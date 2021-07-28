import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ClimbingBoxLoader } from 'react-spinners';

// Layout Blueprints

import {
  LeftSidebar,
  CollapsedSidebar,
  MinimalLayout,
  PresentationLayout
} from './layout-blueprints';

// Example Pages

import WidgetsCountup from './example-pages/WidgetsCountup';
import FormsControls from './example-pages/FormsControls';
import FormsDualListbox from './example-pages/FormsDualListbox';
import FormsToggleSwitch from './example-pages/FormsToggleSwitch';
import PageError404 from './example-pages/PageError404';
import PageError500 from './example-pages/PageError500';
import PageError505 from './example-pages/PageError505';

const Overview = lazy(() => import('./example-pages/Overview'));
const DashboardMonitoring = lazy(() =>
  import('./example-pages/DashboardMonitoring')
);
const DashboardCommerce = lazy(() =>
  import('./example-pages/DashboardCommerce')
);
const DashboardAnalytics = lazy(() =>
  import('./example-pages/DashboardAnalytics')
);
const DashboardStatistics = lazy(() =>
  import('./example-pages/DashboardStatistics')
);
const ElementsAvatars = lazy(() => import('./example-pages/ElementsAvatars'));
const ElementsBadges = lazy(() => import('./example-pages/ElementsBadges'));
const ElementsButtons = lazy(() => import('./example-pages/ElementsButtons'));
const ElementsDropdowns = lazy(() =>
  import('./example-pages/ElementsDropdowns')
);
const ElementsIcons = lazy(() => import('./example-pages/ElementsIcons'));
const ElementsNavigationMenus = lazy(() =>
  import('./example-pages/ElementsNavigationMenus')
);
const ElementsPagination = lazy(() =>
  import('./example-pages/ElementsPagination')
);
const ElementsProgressBars = lazy(() =>
  import('./example-pages/ElementsProgressBars')
);
const ElementsRatings = lazy(() => import('./example-pages/ElementsRatings'));
const ElementsRibbons = lazy(() => import('./example-pages/ElementsRibbons'));
const ElementsScrollable = lazy(() =>
  import('./example-pages/ElementsScrollable')
);
const ElementsSearchBars = lazy(() =>
  import('./example-pages/ElementsSearchBars')
);
const ElementsTimelines = lazy(() =>
  import('./example-pages/ElementsTimelines')
);
const ElementsUtilitiesHelpers = lazy(() =>
  import('./example-pages/ElementsUtilitiesHelpers')
);
const BlocksChartsLarge = lazy(() =>
  import('./example-pages/BlocksChartsLarge')
);
const BlocksChartsSmall = lazy(() =>
  import('./example-pages/BlocksChartsSmall')
);
const BlocksComposed = lazy(() => import('./example-pages/BlocksComposed'));
const BlocksContentText = lazy(() =>
  import('./example-pages/BlocksContentText')
);
const BlocksGrids = lazy(() => import('./example-pages/BlocksGrids'));
const BlocksIcons = lazy(() => import('./example-pages/BlocksIcons'));
const BlocksImages = lazy(() => import('./example-pages/BlocksImages'));
const BlocksListsLarge = lazy(() => import('./example-pages/BlocksListsLarge'));
const BlocksListsSmall = lazy(() => import('./example-pages/BlocksListsSmall'));
const BlocksNavigation = lazy(() => import('./example-pages/BlocksNavigation'));
const BlocksProfilesSmall = lazy(() =>
  import('./example-pages/BlocksProfilesSmall')
);
const BlocksProgressCircular = lazy(() =>
  import('./example-pages/BlocksProgressCircular')
);
const BlocksProgressHorizontal = lazy(() =>
  import('./example-pages/BlocksProgressHorizontal')
);
const BlocksSparklinesLarge = lazy(() =>
  import('./example-pages/BlocksSparklinesLarge')
);
const BlocksSparklinesSmall = lazy(() =>
  import('./example-pages/BlocksSparklinesSmall')
);
const BlocksStatistics = lazy(() => import('./example-pages/BlocksStatistics'));
const MarketingCta = lazy(() => import('./example-pages/MarketingCta'));
const MarketingFeatureSections = lazy(() =>
  import('./example-pages/MarketingFeatureSections')
);
const MarketingFooters = lazy(() => import('./example-pages/MarketingFooters'));
const MarketingHeaders = lazy(() => import('./example-pages/MarketingHeaders'));
const MarketingHero = lazy(() => import('./example-pages/MarketingHero'));
const MarketingIcons = lazy(() => import('./example-pages/MarketingIcons'));
const MarketingPartners = lazy(() =>
  import('./example-pages/MarketingPartners')
);
const MarketingPricingTables = lazy(() =>
  import('./example-pages/MarketingPricingTables')
);
const MarketingTestimonials = lazy(() =>
  import('./example-pages/MarketingTestimonials')
);
const WidgetsAccordions = lazy(() =>
  import('./example-pages/WidgetsAccordions')
);
const WidgetsCalendars = lazy(() => import('./example-pages/WidgetsCalendars'));
const WidgetsCarousels = lazy(() => import('./example-pages/WidgetsCarousels'));
const WidgetsContextMenus = lazy(() =>
  import('./example-pages/WidgetsContextMenus')
);
const WidgetsDragDrop = lazy(() => import('./example-pages/WidgetsDragDrop'));
const WidgetsGuidedTours = lazy(() =>
  import('./example-pages/WidgetsGuidedTours')
);
const WidgetsImageCrop = lazy(() => import('./example-pages/WidgetsImageCrop'));
const WidgetsLoadingIndicators = lazy(() =>
  import('./example-pages/WidgetsLoadingIndicators')
);
const WidgetsModals = lazy(() => import('./example-pages/WidgetsModals'));
const WidgetsNotifications = lazy(() =>
  import('./example-pages/WidgetsNotifications')
);
const WidgetsPopovers = lazy(() => import('./example-pages/WidgetsPopovers'));
const WidgetsTabs = lazy(() => import('./example-pages/WidgetsTabs'));
const WidgetsTooltips = lazy(() => import('./example-pages/WidgetsTooltips'));
const WidgetsTreeView = lazy(() => import('./example-pages/WidgetsTreeView'));
const ChartsApex = lazy(() => import('./example-pages/ChartsApex'));
const ChartsGauges = lazy(() => import('./example-pages/ChartsGauges'));
const Chartjs = lazy(() => import('./example-pages/Chartjs'));
const ChartsSparklines = lazy(() => import('./example-pages/ChartsSparklines'));
const Tables = lazy(() => import('./example-pages/Tables'));
const Maps = lazy(() => import('./example-pages/Maps'));
const FormsClipboard = lazy(() => import('./example-pages/FormsClipboard'));
const FormsColorpicker = lazy(() => import('./example-pages/FormsColorpicker'));
const FormsDatepicker = lazy(() => import('./example-pages/FormsDatepicker'));
const FormsInputMask = lazy(() => import('./example-pages/FormsInputMask'));
const FormsInputSelect = lazy(() => import('./example-pages/FormsInputSelect'));
const FormsSlider = lazy(() => import('./example-pages/FormsSlider'));
const FormsSteppers = lazy(() => import('./example-pages/FormsSteppers'));
const FormsTextareaAutosize = lazy(() =>
  import('./example-pages/FormsTextareaAutosize')
);
const FormsTimepicker = lazy(() => import('./example-pages/FormsTimepicker'));
const FormsTypeahead = lazy(() => import('./example-pages/FormsTypeahead'));
const FormsUpload = lazy(() => import('./example-pages/FormsUpload'));
const FormsValidation = lazy(() => import('./example-pages/FormsValidation'));
const FormsWysiwygEditor = lazy(() =>
  import('./example-pages/FormsWysiwygEditor')
);
const PageCalendar = lazy(() => import('./example-pages/PageCalendar'));
const PageChat = lazy(() => import('./example-pages/PageChat'));
const PageProjects = lazy(() => import('./example-pages/PageProjects'));
const PageFileManager = lazy(() => import('./example-pages/PageFileManager'));
const PageAuthModals = lazy(() => import('./example-pages/PageAuthModals'));
const PageLoginBasic = lazy(() => import('./example-pages/PageLoginBasic'));
const PageLoginCover = lazy(() => import('./example-pages/PageLoginCover'));
const PageLoginIllustration = lazy(() =>
  import('./example-pages/PageLoginIllustration')
);
const PageLoginOverlay = lazy(() => import('./example-pages/PageLoginOverlay'));
const PageRegisterBasic = lazy(() =>
  import('./example-pages/PageRegisterBasic')
);
const PageRegisterCover = lazy(() =>
  import('./example-pages/PageRegisterCover')
);
const PageRegisterIllustration = lazy(() =>
  import('./example-pages/PageRegisterIllustration')
);
const PageRegisterOverlay = lazy(() =>
  import('./example-pages/PageRegisterOverlay')
);
const PageRecoverBasic = lazy(() => import('./example-pages/PageRecoverBasic'));
const PageRecoverCover = lazy(() => import('./example-pages/PageRecoverCover'));
const PageRecoverIllustration = lazy(() =>
  import('./example-pages/PageRecoverIllustration')
);
const PageRecoverOverlay = lazy(() =>
  import('./example-pages/PageRecoverOverlay')
);
const PageProfile = lazy(() => import('./example-pages/PageProfile'));
const PageInvoice = lazy(() => import('./example-pages/PageInvoice'));

const Routes = () => {
  const location = useLocation();

  const pageVariants = {
    initial: {
      opacity: 0,
      scale: 0.99
    },
    in: {
      opacity: 1,
      scale: 1
    },
    out: {
      opacity: 0,
      scale: 1.01
    }
  };

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.4
  };

  const SuspenseLoading = () => {
    return (
      <>
        <div className="d-flex align-items-center flex-column vh-100 justify-content-center text-center py-3">
          <div className="d-flex align-items-center flex-column px-4">
            <ClimbingBoxLoader color={'#3c44b1'} loading={true} />
          </div>
          <div className="text-muted font-size-xl text-center pt-3">
            Please wait while we load the live preview examples
            <span className="font-size-lg d-block text-dark">
              This live preview instance can be slower than a real production
              build!
            </span>
          </div>
        </div>
      </>
    );
  };
  return (
    <AnimatePresence>
      <Suspense fallback={<SuspenseLoading />}>
        <Switch>
          <Redirect exact from="/" to="/Overview" />
          <Route path={['/Overview']}>
            <PresentationLayout>
              <Switch location={location} key={location.pathname}>
                <motion.div
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}>
                  <Route path="/Overview" component={Overview} />
                </motion.div>
              </Switch>
            </PresentationLayout>
          </Route>

          <Route
            path={[
              '/DashboardMonitoring',
              '/DashboardCommerce',
              '/DashboardAnalytics',
              '/DashboardStatistics',
              '/ElementsAvatars',
              '/ElementsBadges',
              '/ElementsButtons',
              '/ElementsDropdowns',
              '/ElementsIcons',
              '/ElementsNavigationMenus',
              '/ElementsPagination',
              '/ElementsProgressBars',
              '/ElementsRatings',
              '/ElementsRibbons',
              '/ElementsScrollable',
              '/ElementsSearchBars',
              '/ElementsTimelines',
              '/ElementsUtilitiesHelpers',
              '/BlocksChartsLarge',
              '/BlocksChartsSmall',
              '/BlocksComposed',
              '/BlocksContentText',
              '/BlocksGrids',
              '/BlocksIcons',
              '/BlocksImages',
              '/BlocksListsLarge',
              '/BlocksListsSmall',
              '/BlocksNavigation',
              '/BlocksProfilesSmall',
              '/BlocksProgressCircular',
              '/BlocksProgressHorizontal',
              '/BlocksSparklinesLarge',
              '/BlocksSparklinesSmall',
              '/BlocksStatistics',
              '/MarketingCta',
              '/MarketingFeatureSections',
              '/MarketingFooters',
              '/MarketingHeaders',
              '/MarketingHero',
              '/MarketingIcons',
              '/MarketingPartners',
              '/MarketingPricingTables',
              '/MarketingTestimonials',
              '/WidgetsAccordions',
              '/WidgetsCalendars',
              '/WidgetsCarousels',
              '/WidgetsContextMenus',
              '/WidgetsCountup',
              '/WidgetsDragDrop',
              '/WidgetsGuidedTours',
              '/WidgetsImageCrop',
              '/WidgetsLoadingIndicators',
              '/WidgetsModals',
              '/WidgetsNotifications',
              '/WidgetsPopovers',
              '/WidgetsTabs',
              '/WidgetsTooltips',
              '/WidgetsTreeView',
              '/ChartsApex',
              '/ChartsGauges',
              '/Chartjs',
              '/ChartsSparklines',
              '/Tables',
              '/Maps',
              '/FormsControls',
              '/FormsClipboard',
              '/FormsColorpicker',
              '/FormsDatepicker',
              '/FormsDualListbox',
              '/FormsInputMask',
              '/FormsInputSelect',
              '/FormsSlider',
              '/FormsSteppers',
              '/FormsTextareaAutosize',
              '/FormsTimepicker',
              '/FormsToggleSwitch',
              '/FormsTypeahead',
              '/FormsUpload',
              '/FormsValidation',
              '/FormsWysiwygEditor',
              '/PageAuthModals',
              '/PageInvoice'
            ]}>
            <LeftSidebar>
              <Switch location={location} key={location.pathname}>
                <motion.div
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}>
                  <Route
                    path="/DashboardMonitoring"
                    component={DashboardMonitoring}
                  />
                  <Route
                    path="/DashboardCommerce"
                    component={DashboardCommerce}
                  />
                  <Route
                    path="/DashboardAnalytics"
                    component={DashboardAnalytics}
                  />
                  <Route
                    path="/DashboardStatistics"
                    component={DashboardStatistics}
                  />
                  <Route path="/ElementsAvatars" component={ElementsAvatars} />
                  <Route path="/ElementsBadges" component={ElementsBadges} />
                  <Route path="/ElementsButtons" component={ElementsButtons} />
                  <Route
                    path="/ElementsDropdowns"
                    component={ElementsDropdowns}
                  />
                  <Route path="/ElementsIcons" component={ElementsIcons} />
                  <Route
                    path="/ElementsNavigationMenus"
                    component={ElementsNavigationMenus}
                  />
                  <Route
                    path="/ElementsPagination"
                    component={ElementsPagination}
                  />
                  <Route
                    path="/ElementsProgressBars"
                    component={ElementsProgressBars}
                  />
                  <Route path="/ElementsRatings" component={ElementsRatings} />
                  <Route path="/ElementsRibbons" component={ElementsRibbons} />
                  <Route
                    path="/ElementsScrollable"
                    component={ElementsScrollable}
                  />
                  <Route
                    path="/ElementsSearchBars"
                    component={ElementsSearchBars}
                  />
                  <Route
                    path="/ElementsTimelines"
                    component={ElementsTimelines}
                  />
                  <Route
                    path="/ElementsUtilitiesHelpers"
                    component={ElementsUtilitiesHelpers}
                  />
                  <Route
                    path="/BlocksChartsLarge"
                    component={BlocksChartsLarge}
                  />
                  <Route
                    path="/BlocksChartsSmall"
                    component={BlocksChartsSmall}
                  />
                  <Route path="/BlocksComposed" component={BlocksComposed} />
                  <Route
                    path="/BlocksContentText"
                    component={BlocksContentText}
                  />
                  <Route path="/BlocksGrids" component={BlocksGrids} />
                  <Route path="/BlocksIcons" component={BlocksIcons} />
                  <Route path="/BlocksImages" component={BlocksImages} />
                  <Route
                    path="/BlocksListsLarge"
                    component={BlocksListsLarge}
                  />
                  <Route
                    path="/BlocksListsSmall"
                    component={BlocksListsSmall}
                  />
                  <Route
                    path="/BlocksNavigation"
                    component={BlocksNavigation}
                  />
                  <Route
                    path="/BlocksProfilesSmall"
                    component={BlocksProfilesSmall}
                  />
                  <Route
                    path="/BlocksProgressCircular"
                    component={BlocksProgressCircular}
                  />
                  <Route
                    path="/BlocksProgressHorizontal"
                    component={BlocksProgressHorizontal}
                  />
                  <Route
                    path="/BlocksSparklinesLarge"
                    component={BlocksSparklinesLarge}
                  />
                  <Route
                    path="/BlocksSparklinesSmall"
                    component={BlocksSparklinesSmall}
                  />
                  <Route
                    path="/BlocksStatistics"
                    component={BlocksStatistics}
                  />
                  <Route path="/MarketingCta" component={MarketingCta} />
                  <Route
                    path="/MarketingFeatureSections"
                    component={MarketingFeatureSections}
                  />
                  <Route
                    path="/MarketingFooters"
                    component={MarketingFooters}
                  />
                  <Route
                    path="/MarketingHeaders"
                    component={MarketingHeaders}
                  />
                  <Route path="/MarketingHero" component={MarketingHero} />
                  <Route path="/MarketingIcons" component={MarketingIcons} />
                  <Route
                    path="/MarketingPartners"
                    component={MarketingPartners}
                  />
                  <Route
                    path="/MarketingPricingTables"
                    component={MarketingPricingTables}
                  />
                  <Route
                    path="/MarketingTestimonials"
                    component={MarketingTestimonials}
                  />
                  <Route
                    path="/WidgetsAccordions"
                    component={WidgetsAccordions}
                  />
                  <Route
                    path="/WidgetsCalendars"
                    component={WidgetsCalendars}
                  />
                  <Route
                    path="/WidgetsCarousels"
                    component={WidgetsCarousels}
                  />
                  <Route
                    path="/WidgetsContextMenus"
                    component={WidgetsContextMenus}
                  />
                  <Route path="/WidgetsCountup" component={WidgetsCountup} />
                  <Route path="/WidgetsDragDrop" component={WidgetsDragDrop} />
                  <Route
                    path="/WidgetsGuidedTours"
                    component={WidgetsGuidedTours}
                  />
                  <Route
                    path="/WidgetsImageCrop"
                    component={WidgetsImageCrop}
                  />
                  <Route
                    path="/WidgetsLoadingIndicators"
                    component={WidgetsLoadingIndicators}
                  />
                  <Route path="/WidgetsModals" component={WidgetsModals} />
                  <Route
                    path="/WidgetsNotifications"
                    component={WidgetsNotifications}
                  />
                  <Route path="/WidgetsPopovers" component={WidgetsPopovers} />
                  <Route path="/WidgetsTabs" component={WidgetsTabs} />
                  <Route path="/WidgetsTooltips" component={WidgetsTooltips} />
                  <Route path="/WidgetsTreeView" component={WidgetsTreeView} />
                  <Route path="/ChartsApex" component={ChartsApex} />
                  <Route path="/ChartsGauges" component={ChartsGauges} />
                  <Route path="/Chartjs" component={Chartjs} />
                  <Route
                    path="/ChartsSparklines"
                    component={ChartsSparklines}
                  />
                  <Route path="/Tables" component={Tables} />
                  <Route path="/Maps" component={Maps} />
                  <Route path="/FormsControls" component={FormsControls} />
                  <Route path="/FormsClipboard" component={FormsClipboard} />
                  <Route
                    path="/FormsColorpicker"
                    component={FormsColorpicker}
                  />
                  <Route path="/FormsDatepicker" component={FormsDatepicker} />
                  <Route
                    path="/FormsDualListbox"
                    component={FormsDualListbox}
                  />
                  <Route path="/FormsInputMask" component={FormsInputMask} />
                  <Route
                    path="/FormsInputSelect"
                    component={FormsInputSelect}
                  />
                  <Route path="/FormsSlider" component={FormsSlider} />
                  <Route path="/FormsSteppers" component={FormsSteppers} />
                  <Route
                    path="/FormsTextareaAutosize"
                    component={FormsTextareaAutosize}
                  />
                  <Route path="/FormsTimepicker" component={FormsTimepicker} />
                  <Route
                    path="/FormsToggleSwitch"
                    component={FormsToggleSwitch}
                  />
                  <Route path="/FormsTypeahead" component={FormsTypeahead} />
                  <Route path="/FormsUpload" component={FormsUpload} />
                  <Route path="/FormsValidation" component={FormsValidation} />
                  <Route
                    path="/FormsWysiwygEditor"
                    component={FormsWysiwygEditor}
                  />
                  <Route path="/PageAuthModals" component={PageAuthModals} />
                  <Route path="/PageInvoice" component={PageInvoice} />
                </motion.div>
              </Switch>
            </LeftSidebar>
          </Route>

          <Route
            path={[
              '/PageCalendar',
              '/PageChat',
              '/PageProjects',
              '/PageFileManager',
              '/PageProfile'
            ]}>
            <CollapsedSidebar>
              <Switch location={location} key={location.pathname}>
                <motion.div
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}>
                  <Route path="/PageCalendar" component={PageCalendar} />
                  <Route path="/PageChat" component={PageChat} />
                  <Route path="/PageProjects" component={PageProjects} />
                  <Route path="/PageFileManager" component={PageFileManager} />
                  <Route path="/PageProfile" component={PageProfile} />
                </motion.div>
              </Switch>
            </CollapsedSidebar>
          </Route>

          <Route
            path={[
              '/PageLoginBasic',
              '/PageLoginCover',
              '/PageLoginIllustration',
              '/PageLoginOverlay',
              '/PageRegisterBasic',
              '/PageRegisterCover',
              '/PageRegisterIllustration',
              '/PageRegisterOverlay',
              '/PageRecoverBasic',
              '/PageRecoverCover',
              '/PageRecoverIllustration',
              '/PageRecoverOverlay',
              '/PageError404',
              '/PageError500',
              '/PageError505'
            ]}>
            <MinimalLayout>
              <Switch location={location} key={location.pathname}>
                <motion.div
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}>
                  <Route path="/PageLoginBasic" component={PageLoginBasic} />
                  <Route path="/PageLoginCover" component={PageLoginCover} />
                  <Route
                    path="/PageLoginIllustration"
                    component={PageLoginIllustration}
                  />
                  <Route
                    path="/PageLoginOverlay"
                    component={PageLoginOverlay}
                  />
                  <Route
                    path="/PageRegisterBasic"
                    component={PageRegisterBasic}
                  />
                  <Route
                    path="/PageRegisterCover"
                    component={PageRegisterCover}
                  />
                  <Route
                    path="/PageRegisterIllustration"
                    component={PageRegisterIllustration}
                  />
                  <Route
                    path="/PageRegisterOverlay"
                    component={PageRegisterOverlay}
                  />
                  <Route
                    path="/PageRecoverBasic"
                    component={PageRecoverBasic}
                  />
                  <Route
                    path="/PageRecoverCover"
                    component={PageRecoverCover}
                  />
                  <Route
                    path="/PageRecoverIllustration"
                    component={PageRecoverIllustration}
                  />
                  <Route
                    path="/PageRecoverOverlay"
                    component={PageRecoverOverlay}
                  />
                  <Route path="/PageError404" component={PageError404} />
                  <Route path="/PageError500" component={PageError500} />
                  <Route path="/PageError505" component={PageError505} />
                </motion.div>
              </Switch>
            </MinimalLayout>
          </Route>
        </Switch>
      </Suspense>
    </AnimatePresence>
  );
};

export default Routes;
