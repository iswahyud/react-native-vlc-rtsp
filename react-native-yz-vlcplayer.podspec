require 'json'

package = JSON.parse(File.read(File.join(__dir__, 'package.json')))

Pod::Spec.new do |s|
  s.name         = 'react-native-vlc-rtsp'
  s.version      = package['version']
  s.license      = package['license']
  s.authors      = package['author']
  s.platforms    = { :ios => "9.0", :osx => "10.13" }
  s.homepage     = 'https://github.com/iswahyud/react-native-vlc-rtsp.git'
  s.summary      = 'A React Native library for VLC player integration.'
  s.source       = { :git => "https://github.com/iswahyud/react-native-vlc-rtsp.git", :tag => "v#{s.version}" }
  s.source_files  = "ios/RCTVLCPlayer/*.{h,m}"

  s.subspec "RCTVLCPlayer" do |ss|
    ss.source_files = "ios/RCTVLCPlayer/*.{h,m}"
  end

  s.dependency 'React-Core'

end
