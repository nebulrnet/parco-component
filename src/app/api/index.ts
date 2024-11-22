import { axiosMockAdapterInstance } from './mock';
import './funds';

axiosMockAdapterInstance.onAny().passThrough();
