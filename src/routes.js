const BASE_API_URL = 'https://shikhardubey85.pythonanywhere.com/'

// Stats APIs
export const FOLLOWERS_DEMOGRAPHY_API = BASE_API_URL + '/ig-user/user-insights-city-age-gender/'
export const GET_PROFILE_ACCOUNTS_REACHED = BASE_API_URL + '/ig-user/user-insights/?metric=reach,impressions&period=days_28,week,day';
export const GET_PROFILE_ACCOUNTS_ENGAGED = BASE_API_URL + '/ig-user/user-insights/?metric=accounts_engaged&period=day&metric_type=total_value';
export const GET_PROFILE_VIEWS = BASE_API_URL + '/ig-user/user-insights/?metric=impressions,reach,profile_views&period=day';
export const ACCOUNTS_REACHED_DEMOGRAPHY_API = (breakdown) => BASE_API_URL + `/ig-user/user-insights-reached-demo/?period=lifetime&breakdown=${breakdown}`;
export const ACCOUNTS_ENGAGED_DEMOGRAPHY_API = (breakdown) => BASE_API_URL + `/ig-user/user-insights-engaged-demo/?period=lifetime&breakdown=${breakdown}`;

// Instagram Feed Data
export const INSTAGRAM_FEED_DETAILS = (userId) => BASE_API_URL + `/ig-user/media-fields/?ig_user_id=${userId}`
export const INSTAGRAM_FEED_DETAILS_LIST = (isFirstPage, cursorToken, beforeOrAfter) => BASE_API_URL + '/ig-user/media-fields-insights?limit=30' + (isFirstPage ? '' : `&${beforeOrAfter}=${cursorToken}`)
export const GET_PER_MEDIA_INSIGHT = (mediaType, mediaId) => BASE_API_URL + `ig-user/media-insights/?media_id=${mediaId}&media_type=${mediaType}`;

// Tag
export const UPDATE_TAG = BASE_API_URL + 'ig-user/tag/'

// User Info
export const GET_USER_LIST = BASE_API_URL + '/ig-user/id-details/'
export const INSTAGRAM_USER_INFO = (userId) => BASE_API_URL + `/ig-user/user-fields/?ig_user_id=${userId}`

// Ads
export const GET_ADS_INFO = BASE_API_URL + '/ad/advertisement/?endpoint=business'