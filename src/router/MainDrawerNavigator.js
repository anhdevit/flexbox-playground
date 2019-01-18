import { createDrawerNavigator } from 'react-navigation';
import Documentation from '../feature/Documentation';
import PlaygroundStack from './PlaygroundStack'
import DocumentationStack from './DocumentationStack';

const MainDrawerNavigator = createDrawerNavigator(
    {
        Playground: PlaygroundStack,
        Documentation: DocumentationStack
    }
)

export default MainDrawerNavigator;