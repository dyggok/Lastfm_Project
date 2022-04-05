import { render, screen } from '@testing-library/react';
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query';
import TopAlbums from './components/TopAlbums';
import TopArtists from './components/TopArtists';
import TopTracks from './components/TopTracks';
import MainPage from './MainPage';
import Loading from './components/Loading';
import ArtistDetail from './components/ArtistDetail';

test('header renders', () => {
  render(<TopArtists />);
  const headerElement = screen.getByText(/top artists/i);
  expect(headerElement).toBeInTheDocument();
  expect(headerElement).toHaveTextContent("Top Artists");
});

test('renders without crashing', () => {
  const queryClient = new QueryClient();
  const {debug} = render(
    <QueryClientProvider client={queryClient}>
                <TopAlbums />
    </QueryClientProvider>
  );

  debug();
});

test('loading renders', () => {
  const {debug} = render(<Loading />);
  const loadingElement = screen.getByRole("img");
  expect(loadingElement).toHaveClass("rounded");
  expect(loadingElement).toHaveAttribute("alt");
});

test('artist detail render', () => {
  const queryClient = new QueryClient();
  const {debug} = render(
    <QueryClientProvider client={queryClient}>
      <ArtistDetail />);
    </QueryClientProvider>
  );
  debug();
}) 