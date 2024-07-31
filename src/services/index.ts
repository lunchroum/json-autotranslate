import { GoogleTranslate } from './google-translate';
import { DeepL } from './deepl';
import { DryRun } from './dry-run';
import { AzureTranslator } from './azure-translator';
import type { Matcher } from '../matchers';
import { AmazonTranslate } from './amazon-translate';

export interface TranslationResult {
  key: string;
  value: string;
  translated: string;
}

export interface TString {
  key: string;
  value: string;
}
export interface TranslationService {
  name: string;
  initialize: (
    config?: string,
    interpolationMatcher?: Matcher,
    decodeEscapes?: boolean,
    glossariesDir?: string,
    appName?: string,
    context?: string,
  ) => Promise<void>;
  supportsLanguage: (language: string) => boolean;
  translateStrings: (
    strings: TString[],
    from: string,
    to: string,
  ) => Promise<TranslationResult[]>;
}

export const serviceMap: {
  [k: string]: TranslationService;
} = {
  'google-translate': new GoogleTranslate(),
  deepl: new DeepL(false),
  'deepl-free': new DeepL(true),
  'dry-run': new DryRun(),
  azure: new AzureTranslator(),
  'amazon-translate': new AmazonTranslate(),
};

export interface DeepLGlossary {
  glossary_id: string;
  name: string;
  ready: boolean;
  source_lang: string;
  target_lang: string;
  creation_time: string;
  entry_count: string;
}
