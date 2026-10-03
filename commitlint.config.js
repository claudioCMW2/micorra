export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'subject-case': [2, 'always', 'sentence-case'],
    'subject-max-length': [2, 'always', 70],
    'signed-off-by': [2, 'always', 'Signed-off-by:'],
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'refactor',
        'perf',
        'docs',
        'test',
        'style',
        'build',
        'ci',
        'deps',
        'chore',
        'revert',
      ],
    ],
  },
};
