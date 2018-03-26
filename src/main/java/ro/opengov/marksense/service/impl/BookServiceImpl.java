package ro.opengov.marksense.service.impl;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ro.opengov.marksense.domain.Book;
import ro.opengov.marksense.repository.BookRepository;
import ro.opengov.marksense.service.BookService;
import java.util.List;

/**
 * Service Implementation for managing Book.
 */
@Service
@Transactional
public class BookServiceImpl implements BookService {

    private final Logger log = LoggerFactory.getLogger(BookServiceImpl.class);

    private final BookRepository bookRepository;

    public BookServiceImpl(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    /**
     * Save a book.
     *
     * @param book the entity to save
     * @return the persisted entity
     */
    @Override
    public Book save(Book book) {
        log.debug("Request to save Book : {}", book);
        return bookRepository.save(book);
    }

    /**
     * Get all the books.
     *
     * @return the list of entities
     */
    @Override
    @Transactional(readOnly = true)
    public List<Book> findAll() {
        log.debug("Request to get all Books");
        return bookRepository.findAll();
    }

    /**
     * Get one book by id.
     *
     * @param id the id of the entity
     * @return the entity
     */
    @Override
    @Transactional(readOnly = true)
    public Book findOne(Long id) {
        log.debug("Request to get Book : {}", id);
        return bookRepository.findOne(id);
    }

    /**
     * Delete the book by id.
     *
     * @param id the id of the entity
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete Book : {}", id);
        bookRepository.delete(id);
    }
}
