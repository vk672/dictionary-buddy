import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/styles';

const DefinitionCard = ({ term, definition, synonyms }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.term}>{term}</Text>
      <Text style={styles.definition}>{definition}</Text>
      {synonyms.length > 0 && (
        <Text style={styles.synonyms}>
          Synonyms: <Text style={styles.synonymList}>{synonyms.join(', ')}</Text>
        </Text>
      )}
    </View>
  );
};

export default DefinitionCard;
