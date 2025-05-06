import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    alignSelf: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  loader: {
    marginVertical: 20,
  },
  error: {
    color: 'red',
    marginTop: 10,
    textAlign: 'center',
  },
  card: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 2,
  },
  term: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  definition: {
    fontSize: 16,
    marginVertical: 10,
  },
  synonyms: {
    fontSize: 14,
    color: '#333',
  },
  synonymList: {
    fontWeight: 'bold',
    color: '#007AFF',
  },
});
