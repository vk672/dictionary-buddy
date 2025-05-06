import React, { useState } from 'react';
import { View, TextInput, Button, ActivityIndicator, Text, StyleSheet, ScrollView } from 'react-native';
import DefinitionCard from './components/DefinitionCard';
import styles from './styles/styles';

export default function App() {
  const [term, setTerm] = useState('');
  const [definition, setDefinition] = useState('');
  const [synonyms, setSynonyms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchDefinition = async () => {
    setLoading(true);
    setError('');
    setDefinition('');
    setSynonyms([]);

    try {
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${term}`);
      if (!response.ok) throw new Error('Term not found');
      const data = await response.json();

      const meaning = data[0]?.meanings[0];
      setDefinition(meaning?.definitions[0]?.definition || 'No definition available');
      setSynonyms(meaning?.synonyms || []);
    } catch (err) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Dictionary Buddy 📘</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter a term"
        value={term}
        onChangeText={setTerm}
      />
      <Button title="Search" onPress={fetchDefinition} />

      {loading && <ActivityIndicator size="large" color="#007AFF" style={styles.loader} />}

      {error ? <Text style={styles.error}>{error}</Text> : null}

      {!loading && definition && (
        <DefinitionCard term={term} definition={definition} synonyms={synonyms} />
      )}
    </ScrollView>
  );
}

import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';



