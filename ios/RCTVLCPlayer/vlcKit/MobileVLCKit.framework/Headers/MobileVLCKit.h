/*****************************************************************************
 * VLCKit: MobileVLCKit
 *****************************************************************************
 * Copyright (C) 2010-2023 Pierre d'Herbemont and VideoLAN
 *
 * Authors: Pierre d'Herbemont <pdherbemont # videolan.org>
 *          Felix Paul Kühne <fkuehne # videolan.org
 *
 * This program is free software; you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation; either version 2.1 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program; if not, write to the Free Software Foundation,
 * Inc., 51 Franklin Street, Fifth Floor, Boston MA 02110-1301, USA.
 *****************************************************************************/

#import "VLCAudio.h"
#import "VLCLibrary.h"
#import "VLCMedia.h"
#import "VLCMediaDiscoverer.h"
#import "VLCMediaList.h"
#import "VLCMediaPlayer.h"
#import "VLCAudioEqualizer.h"
#import "VLCMediaListPlayer.h"
#import "VLCMediaThumbnailer.h"
#import "VLCMediaMetaData.h"
#import "VLCDialogProvider.h"
#import "VLCTime.h"
#import "VLCTranscoder.h"
#import "VLCRendererDiscoverer.h"
#import "VLCRendererItem.h"
#import "VLCFilter.h"
#import "VLCAdjustFilter.h"
#import "VLCLogging.h"
#import "VLCConsoleLogger.h"
#import "VLCFileLogger.h"
#import "VLCLogMessageFormatter.h"
#import "VLCEventsConfiguration.h"

@class VLCMedia;
@class VLCMediaLibrary;
@class VLCMediaList;
@class VLCTime;
@class VLCVideoView;
@class VLCAudio;
@class VLCMediaThumbnailer;
@class VLCMediaListPlayer;
@class VLCMediaPlayer;
@class VLCAudioEqualizer;
@class VLCAudioEqualizerBand;
@class VLCAudioEqualizerPreset;
@class VLCMediaMetaData;
@class VLCDialogProvider;
@class VLCRendererDiscoverer;
@class VLCRendererDiscovererDescription;
@class VLCRendererItem;
@class VLCFilterParameter;
@class VLCAdjustFilter;
@class VLCConsoleLogger;
@class VLCFileLogger;
@class VLCLogMessageFormatter;
