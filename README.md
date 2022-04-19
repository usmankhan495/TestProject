# Setup instructions

# Clone the example app repo
git clone https://github.com/usmankhan495/TestProject.git \
cd TestProject

# Install npm dependencies
npm install

# Run on iOS
cd ios\
RCT_NEW_ARCH_ENABLED=1 pod install\
RCT_NEW_ARCH_ENABLED=1 arch -x86_64 pod install (For Apple M1)\
cd ..\
npm run ios

# Run on android
npm run android
