export type TestSummary = {
  id: string;
  name: string;
  description: string;
  numberOfTasks: number;
};

export const TESTS: TestSummary[] = [
  {
    id: '1',
    name: 'React Native Basics',
    description: 'Core components, Flexbox layout, and styling.',
    numberOfTasks: 10,
  },
  {
    id: '2',
    name: 'TypeScript Fundamentals',
    description: 'Static types, interfaces, union types, and generics.',
    numberOfTasks: 8,
  },
  {
    id: '3',
    name: 'React Navigation',
    description: 'Stack navigator, route params, and typed hooks.',
    numberOfTasks: 6,
  },
];
