import { type Matcher } from '../matchers';
import type { TranslationService } from '.';
export declare class ManualTranslation implements TranslationService {
    private interpolationMatcher;
    name: string;
    initialize(config?: any, interpolationMatcher?: Matcher): Promise<void>;
    supportsLanguage(): boolean;
    translateStrings(strings: {
        key: string;
        value: string;
    }[], from: string, to: string): Promise<{
        key: string;
        value: string;
        translated: string;
    }[]>;
}
