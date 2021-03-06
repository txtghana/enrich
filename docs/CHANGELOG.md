# [1.19.0](https://github.com/txtghana/enrich/compare/v1.18.0...v1.19.0) (2021-07-27)


### Features

* build for prod ([de4f2fb](https://github.com/txtghana/enrich/commit/de4f2fb7e52eb6a6b6991aa447ea66369f806a27))

# [1.17.0](https://github.com/txtghana/enrich/compare/v1.16.0...v1.17.0) (2021-07-27)


### Features

* update purge url ([5a95396](https://github.com/txtghana/enrich/commit/5a95396c01e9ed7ee1e7e3a314d55bd9f0e7ee25))

# [1.16.0](https://github.com/txtghana/enrich/compare/v1.15.0...v1.16.0) (2021-07-27)


### Features

* add encoded query string to specify that the referrer and callback have been encoded ([4b82050](https://github.com/txtghana/enrich/commit/4b82050e74aa54b11eb2f3c9b219c03d75b4467f))
* add subscription - unsubscription to package ([59ee658](https://github.com/txtghana/enrich/commit/59ee6580f6f38e88a72b41689ab0f829f8eaa68b))
* add subscription - unsubscription to package ([b3964b8](https://github.com/txtghana/enrich/commit/b3964b8b961331e4b58bbc257bd5d7a5252dcf05))
* reduce timeout on local ([2ff269f](https://github.com/txtghana/enrich/commit/2ff269f740070b61ed0a23673380fba0f8495a05))

# [1.15.0](https://github.com/txtghana/enrich/compare/v1.14.0...v1.15.0) (2021-07-27)


### Features

* encode referrer and callback url ([7731fa1](https://github.com/txtghana/enrich/commit/7731fa152aadf6fc930df4f3848e4695961c7f5b))

# [1.14.0](https://github.com/txtghana/enrich/compare/v1.13.0...v1.14.0) (2021-07-27)


### Features

* make callback, referrer, app session id optional ([1d09c14](https://github.com/txtghana/enrich/commit/1d09c14ae5e176d7a81701a9f77b57d05c49f503))

# [1.13.0](https://github.com/txtghana/enrich/compare/v1.12.0...v1.13.0) (2021-07-26)


### Features

* purge package cache on release ([8237b23](https://github.com/txtghana/enrich/commit/8237b23d8d042052720c84282f04cf4c4a955f0f))

# [1.12.0](https://github.com/txtghana/enrich/compare/v1.11.1...v1.12.0) (2021-07-26)


### Features

* add app session id to enrichment redirect url ([5574171](https://github.com/txtghana/enrich/commit/5574171a2a84aa3048272920e6b70eb665442704))

## [1.11.1](https://github.com/txtghana/enrich/compare/v1.11.0...v1.11.1) (2021-07-25)


### Bug Fixes

* enrich if elapsed time greater than defaultElapsedTime ([8abb2c4](https://github.com/txtghana/enrich/commit/8abb2c4f88695fc223f378dc2c4675a374a3588e))
* fix dataset used as a function ([40c0418](https://github.com/txtghana/enrich/commit/40c0418702afb83eba0924d7b2a4eef93d6d9651))
* fix isSevopixel util funciton not resolving in get mobile info file ([1c27a91](https://github.com/txtghana/enrich/commit/1c27a9162d256919ea0ceeaf4d7407dbdf3be464))
* fix normal header enrichment processing ([f82c29d](https://github.com/txtghana/enrich/commit/f82c29d071c63be720c6ebe5a9b1a2ca19889a0a))

# [1.11.0](https://github.com/txtghana/enrich/compare/v1.10.0...v1.11.0) (2021-07-23)


### Bug Fixes

* fix defaultElapsedTime declared twice ([08b7be1](https://github.com/txtghana/enrich/commit/08b7be1f2e4c1b83c014263dddad888583e5a0a0))
* fix general enrichmenturl ([bb01093](https://github.com/txtghana/enrich/commit/bb010937ead88414fdef5800c2a5b3b55d2c08b7))


### Features

* do not enrich if last enrich less than 2 minutes ([b764612](https://github.com/txtghana/enrich/commit/b7646121898644b823ad69d061f33eda51e474d5))
* increase general enrichment timeout to 30 days ([4dae8ba](https://github.com/txtghana/enrich/commit/4dae8bad1492c5e785462925d68d78172caf24dc))
* use domain name as url to save enrichment time, if not sevopixel ([4b1427c](https://github.com/txtghana/enrich/commit/4b1427c221c550d305e9b5363b3c108cb2e62363))

# [1.10.0](https://github.com/txtghana/enrich/compare/v1.9.0...v1.10.0) (2021-07-20)


### Features

* redirect directly to general enrichment if no spt key specified and referrer specified ([443404e](https://github.com/txtghana/enrich/commit/443404eed30d81db7a3a9b1ce88dc9bb9e3a7733))

# [1.9.0](https://github.com/txtghana/enrich/compare/v1.8.0...v1.9.0) (2021-07-13)


### Features

* change pixel site url to public ([7f9033c](https://github.com/txtghana/enrich/commit/7f9033c0fcb55b8b892de3b5c747008fbbab98dc))

# [1.8.0](https://github.com/txtghana/enrich/compare/v1.7.0...v1.8.0) (2021-07-12)


### Bug Fixes

* use var instead of const in script ([84ede6b](https://github.com/txtghana/enrich/commit/84ede6b890abe31c7971c58a53429d55c66c4837))


### Features

* use test production ([4e58be0](https://github.com/txtghana/enrich/commit/4e58be021db4f358135847944052121336fc9b70))

# [1.7.0](https://github.com/txtghana/enrich/compare/v1.6.0...v1.7.0) (2021-07-12)


### Bug Fixes

* fix canGetMobileInfo condition ([8b612e1](https://github.com/txtghana/enrich/commit/8b612e182e9e66d1b611f975077d74cf2215baeb))


### Features

* add fingerprint to sent data on redirection ([a33c113](https://github.com/txtghana/enrich/commit/a33c113bf69fc484ec9b2e581fe1f87958cbd02a))
* add more data ([2bb0fe5](https://github.com/txtghana/enrich/commit/2bb0fe51af8cfe63c914f7d37e9001505230fe2a))
* remove test web bundle from ([5cd4c32](https://github.com/txtghana/enrich/commit/5cd4c32e1f1bb5feb80f010082a2571f2314dbd6))

# [1.6.0](https://github.com/txtghana/enrich/compare/v1.5.0...v1.6.0) (2021-07-07)


### Features

* bundle for production next version ([52f003b](https://github.com/txtghana/enrich/commit/52f003becfde5883c5d5d7102ee30c78c744ebb8))

# [1.5.0](https://github.com/txtghana/enrich/compare/v1.4.0...v1.5.0) (2021-07-07)


### Bug Fixes

* fix send data ([7916554](https://github.com/txtghana/enrich/commit/7916554b5787371ad8bd1a26674b7ac48f17c322))


### Features

* merge origin main ([fcba74c](https://github.com/txtghana/enrich/commit/fcba74c33aafa030fe8f59ce7787a507ae085d57))
* update script for user page and header enrichment flow ([50aa7e7](https://github.com/txtghana/enrich/commit/50aa7e7b79a955c5f8b275f25c802a368a97e7c2))

# [1.4.0](https://github.com/txtghana/enrich/compare/v1.3.0...v1.4.0) (2021-07-07)


### Features

* use development and production config ([0d8667a](https://github.com/txtghana/enrich/commit/0d8667ad760a0cc358cb7edcb3ed066d33fae438))

# [1.3.0](https://github.com/txtghana/enrich/compare/v1.2.0...v1.3.0) (2021-07-06)


### Features

* getting fingerprint ([ed510cf](https://github.com/txtghana/enrich/commit/ed510cf35705f2ee0037dc12f952f4344487514e))
* next version ([0d94510](https://github.com/txtghana/enrich/commit/0d9451088d54b1aec67d1be785e9cc156a4b094b))

# [1.2.0](https://github.com/txtghana/enrich/compare/v1.1.0...v1.2.0) (2021-07-06)


### Features

* do not run data not implemented data provider ([931bcf6](https://github.com/txtghana/enrich/commit/931bcf674ef2b7c12dd0345c2098d345166e2a81))
* refactor how data is gathered ([a91c6fa](https://github.com/txtghana/enrich/commit/a91c6fa49e7215d1a3b31d9d53822f9c8b63dc9d))
* reorganized application ([91b0d87](https://github.com/txtghana/enrich/commit/91b0d875daa7696bd0ec2e311f3d018eb99e6f80))
* send data to sevopixel data endpoint ([b43ee50](https://github.com/txtghana/enrich/commit/b43ee5063de26dc272f476679023667af49be1d6))
* update how to get data and fix errors ([fe665ce](https://github.com/txtghana/enrich/commit/fe665ce9cd8979e7fad4b08851f57acd0d487cd3))
* update how to know if number has been enriched ([7014a92](https://github.com/txtghana/enrich/commit/7014a92e5c239e457cacf691aba3766128ebc1c0))

# [1.1.0](https://github.com/txtghana/enrich/compare/v1.0.0...v1.1.0) (2021-07-05)


### Features

* delete pre commit hook and using github custom rules ([8c24cd5](https://github.com/txtghana/enrich/commit/8c24cd5bb38145c01b313ac78339159437e97ffc))

# 1.0.0 (2021-07-05)


### Bug Fixes

* fix semantic release config ([f41ecd4](https://github.com/txtghana/enrich/commit/f41ecd4718fa03cfbefa12c63de59aa2232ccf12))


### Features

* add branch to use for deployment to travis config ([f6c0212](https://github.com/txtghana/enrich/commit/f6c02121594b4c69a98d8c19472d5aeae11406e8))
* add github action for handling release - delete travis config ([ae79609](https://github.com/txtghana/enrich/commit/ae79609d1d941b24807f47fabcf460297205934d))
* add readme ([0f9b996](https://github.com/txtghana/enrich/commit/0f9b996e3703490eb25dccddfdfc22c1929c7a4d))
* add release branch to releaserc ([83bfa98](https://github.com/txtghana/enrich/commit/83bfa98768f9f6c8419a39ae3940f7a35afc3f3c))
* add travis config for automatic deployment ([4351733](https://github.com/txtghana/enrich/commit/435173376bf0b8c993d4aacf282597fd3d11656b))
* modify github action ([ad6f8e5](https://github.com/txtghana/enrich/commit/ad6f8e5fe12fe567ceef6f17e7a3c713c7243122))
