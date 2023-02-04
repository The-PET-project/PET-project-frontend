export default interface ProcessIndicator {
  inProgress: boolean;
  isFinished: boolean;
  isSuccess: boolean;
}
const initProcessState: ProcessIndicator = {
  inProgress: false,
  isFinished: false,
  isSuccess: false,
};

const processStarted: ProcessIndicator = {
  inProgress: true,
  isFinished: false,
  isSuccess: false,
};

const processFinishedWithSuccess: ProcessIndicator = {
  inProgress: false,
  isFinished: true,
  isSuccess: true,
};
const processFinishedWithError: ProcessIndicator = {
  inProgress: false,
  isFinished: true,
  isSuccess: false,
};

export {
  initProcessState,
  processStarted,
  processFinishedWithSuccess,
  processFinishedWithError,
};
