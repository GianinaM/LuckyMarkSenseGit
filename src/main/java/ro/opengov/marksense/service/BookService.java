package ro.opengov.marksense.service;

import ro.opengov.marksense.domain.Book;
import java.util.List;

/**
 * Service Interface for managing Book.
 */
public interface BookService {

    /**
     * Save a book.
     *
     * @param book the entity to save
     * @return the persisted entity
     */
    Book save(Book book);

    /**
     * Get all the books.
     *
     * @return the list of entities
     */
    List<Book> findAll();

    /**
     * Get the "id" book.
     *
     * @param id the id of the entity
     * @return the entity
     */
    Book findOne(Long id);

    /**
     * Delete the "id" book.
     *
     * @param id the id of the entity
     */
    void delete(Long id);
}
