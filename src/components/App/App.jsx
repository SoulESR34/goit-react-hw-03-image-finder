import { Component } from 'react';
import { SearchBar } from '../SearchBar/SearchBar';
import { MainContainer } from './App.styled';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Photos } from 'services/Photos.service';
import { Error } from '../Error/Error';
import { Loader } from 'components/Loader/Loader.styled';
import { Modal } from '../Modal/Modal';
import { ButtonLoadMore } from '../ButtonLoadMore/ButtonLoadMore';

export class App extends Component {
  state = {
    searchedPhotos: [],
    loading: false,
    pageNum: 1,
    saveSearch: '',
    error: false,
    modalOpen: false,
    modalPhoto: '',
  };

  savePhotos = (photos, typeSave) => {
    if (typeSave === 'update') {
      this.setState(prevState => ({
        searchedPhotos: [...prevState.searchedPhotos, ...photos],
      }));
    } else if (typeSave === 'get') {
      this.setState({ searchedPhotos: [...photos] });
    }
  };

  // Request content
  // (Search = query in string, Page = Pagination of load)
  requestPhotos = async (search = '', page = 1, typeRequest = 'get') => {
    this.setState({ loading: true, saveSearch: search, pageNum: page });
    try {
      // request 
      const gallery = await Photos(search, page)
      this.savePhotos(gallery.hits, typeRequest);
    } catch (error) {
      this.setState({ error: true });
      console.log('Download error someone parameter is incorrect', error);
    } finally {
      // ends loading animation
      this.setState({ loading: false });
    }
  };

  // Request when the user click in the 'LoadMore' button
  loadMore = () => {
    this.requestPhotos(this.state.saveSearch, this.state.pageNum + 1, 'update');
  };

  enlargePhoto = largePhoto => {
    this.setState({ modalOpen: true, modalPhoto: largePhoto });
  };

  closeModal = e => {
    if (this.state.modalOpen && e.key === 'Escape')
      return this.setState({ modalOpen: false });
  };

  identifyPhoto = e => {
    this.enlargePhoto(e.target.getAttribute('data-largeImage'));
  };

  componentDidMount() {
    this.setState(prevState => ({ counter: prevState.counter + 1 }));
    this.requestPhotos();

    document.addEventListener('keydown', e => this.closeModal(e));
  }

  render() {
    const { searchedPhotos, error, modalOpen, modalPhoto } = this.state;
    return (
      <>
        <SearchBar searchEngine={this.requestPhotos}></SearchBar>
        <main>
          <MainContainer className="container">
            {this.state.loading && <Loader></Loader>}
            {error ? (
              <Error></Error>
            ) : (
              <ImageGallery
                photosGallery={searchedPhotos}
                identifyImg={this.identifyPhoto}
              ></ImageGallery>
            )}
            <ButtonLoadMore request={this.loadMore}></ButtonLoadMore>
          </MainContainer>
        </main>
        {modalOpen && modalPhoto !== null && (
          <Modal photoURL={modalPhoto}></Modal>
        )}
      </>
    );
  }
}
