import * as angular from 'angular';

import {FileInputDirective} from './input/FileInputDirective';
import {SubmitFormDirective} from './input/SubmitFormDirective';

import {FileComponent} from './file/FileComponent';
import {FolderComponent} from './folder/FolderComponent';
import {UploadFormComponent} from './uploadForm/UploadFormComponent';
import {BucketComponent} from './bucket/BucketComponent';

import {S3SessionComponent} from './s3session/S3SessionComponent';

import './index.css';

// register components and configure the module.
angular
  .module('s3commander', [])
  .config(function ($sceDelegateProvider: any) {
    // https://docs.angularjs.org/api/ng/provider/$sceDelegateProvider
    $sceDelegateProvider.resourceUrlWhitelist([
      'self',

      // amazon s3 (generic url, bucket url, bucket url in govcloud regions)
      'https://s3.amazonaws.com/*',
      'https://*.s3.amazonaws.com/',
      'https://*.s3.*.amazonaws.com/'
    ]);
  })
  .directive('fileInput', [() => new FileInputDirective()])
  .directive('submitForm', [() => new SubmitFormDirective()])
  .component('file', FileComponent)
  .component('folder', FolderComponent)
  .component('uploadform', UploadFormComponent)
  .component('bucket', BucketComponent)
  .component('s3session', S3SessionComponent);
