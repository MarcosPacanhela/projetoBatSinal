import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between'
  },
  image: {
    marginTop: 150,
    alignSelf: 'center'
  },
  text: {
    fontSize: 20,
    textAlign: 'center'
  },
  textLabel: {
    fontSize: 20,
    textAlign: 'left'
  },
  button: {
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 15,
    padding: 8,
    marginBottom: 100,
    marginHorizontal: 15
  },
  imageForm: {
    marginTop: 50,
    marginHorizontal: 20,
    alignSelf: 'flex-start',
    width: 150,
    height: 80
  },
  textInput: {
    width: '100%',
    padding: 10,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 15,
  },
  containerForm: {
    flex: 1,
    marginTop: 50,
    marginHorizontal: 20,
    alignSelf: 'flex-start',
    width: '90%',
    gap: 10
  },
});

export default styles;