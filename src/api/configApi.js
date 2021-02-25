import { urlObjectKeys } from "next/dist/next-server/lib/utils";

const myHeaders = new Headers();
myHeaders.append("Authorization", "Basic b0JPdFZYN1BtQkpPSG5OaVJUZ2Y1S005YjI5Wk53Tk1jWEltT05BWTpKUUV0N0xTajE3NjFYZ1hSRWJEbmswVmRGc3QxZUROcUJzbnJUd1hTVDhvczBaREZXYzRnM1RvRXFpclJveXg1YThaWmNnYklDUkFRZGhlMG50VWw1WWVKcHNQVzJHNDZKVUJCNW1DdTRHT3VzNWwweXRxc2c4bk9uRDlLaVVUYw==");
myHeaders.append("Content-Type", "application/json;charset=utf-8");
myHeaders.append("Accept", "application/json, text/plain, */*");
myHeaders.append("Cookie", "__cf_bm=72f766d99828a4fad787c2500b4c11369ca88631-1613417056-1800-ATPJ/MqNhpNnJz3cMZm/VuDBAvkkwDEJ6nG3JNgl88FyZWj0GulqawBR4hcKg6BIsZFAhiIg+5q0R5Bu2oRCB5k=; __cfduid=d61408b92fa3f9fdf892e6ed9cf1871da1613326933; __cfruid=c80505004c8f99e7b5563cba1a1b2966e3dc7f87-1613417056; __udmy_2_v57r=0575f071c1c44f158ed9b6d8ad201313; evi=\"SlFYNkxYDm4DQRN1TFgObkdREXBCQAMtE0kedllaCGATQBtzXkBPNxMFCXtdTlc6UFERdltUTTEdURl0V1pXdkpRXWNUU1luRxIJe1hXQ3RMDlY=\"; seen=1; ud_cache_brand=USen_US; ud_cache_device=desktop; ud_cache_logged_in=0; ud_cache_marketplace_country=US; ud_cache_modern_browser=0; ud_cache_price_country=US; ud_cache_release=69a79de0144deefc63a5; ud_cache_user=\"\"; ud_cache_version=1; ud_firstvisit=2021-02-14T18:22:13.883770+00:00:1lBM2A:XW-e2tKZWBII-_HuCShlM4hElhU; ud_rule_vars=\"eJx9jcsOgyAURH_FsG019yL44FtICPKwpKakiG6M_15iuuiqq1nMnDkHyTrNLjur9rCGHJMA3nMPPRo0jHnkg7Pj1NlBWwrYYitMjM_giKjIIcmi16ySe2-upNXZyVJIQoFiDbRGVuEgKBXImhb6DsYbgACQ5F5WPqRCXeK_bNsMPacMftlLnONmHion7X0wao1bMk7tOgU9Ld-3mGb9CkaSk5wfJVZHjQ==:1lBjXA:sIMhXKgryAo1tbUPEVewl3VpKDs\"");

export const requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow',
  url: 'https://www.udemy.com/api-2.0/'
};