// src/index.ts

// Declare the type locally
export type TabAutocompleteOptions = {
  disable: boolean;
  useCopyBuffer: boolean;
  useSuffix: boolean;
  maxPromptTokens: number;
  prefixPercentage: number;
  maxSuffixPercentage: number;
  debounceDelay: number;
  multilineCompletions: string;
  slidingWindowPrefixPercentage: number;
  slidingWindowSize: number;
  maxSnippetPercentage: number;
  recentlyEditedSimilarityThreshold: number;
  useCache: boolean;
  onlyMyCode: boolean;
  useOtherFiles: boolean;
  useRecentlyEdited: boolean;
  recentLinePrefixMatchMinLength: number;
  disableInFiles: undefined | boolean;
};

// Export other things as necessary
export const someFunction = (opts: TabAutocompleteOptions) => { 
  // Your code here 
};
