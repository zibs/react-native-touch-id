import { NativeModules } from 'react-native';
const NativeTouchID = NativeModules.FingerprintAuth;

export default {
  isSupported() {
    return new Promise((resolve, reject) => {
      NativeTouchID.isSupported(
        error => {
          return reject(typeof error == 'String' ? createError(error, error) : createError(error));
        },
        success => {
          return resolve(true);
        }
      );
    });
  },

  authenticate(reason, config = null) {
    var authReason;
    if (reason) {
      authReason = reason;
    } else {
      authReason = ' ';
    }

    return new Promise((resolve, reject) => {
      NativeTouchID.authenticate(
        authReason,
        error => {
          return reject(typeof error == 'String' ? createError(error, error) : createError(error));
        },
        success => {
          return resolve(true);
        }
      );
    });
  }
};

function TouchIDError(name, details) {
  this.name = name || 'TouchIDError';
  this.message = details.message || 'Touch ID Error';
  this.details = details || {};
}

TouchIDError.prototype = Object.create(Error.prototype);
TouchIDError.prototype.constructor = TouchIDError;

function createError(error) {
  return new TouchIDError('Touch ID Error', error);
}
