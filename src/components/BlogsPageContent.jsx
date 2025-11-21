"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import HeroLogo from '@/app/assets/AboutUs_img/Asset 4 (1) 1.png';
import { ArrowRight } from 'lucide-react';
import { AboutUsCTA } from '@/components/AboutUsComponents/AboutUsCTA';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import '@/app/blogs/BlogsPage.scss';

const baseBlogCollectionSchema = {
  '@context': 'https://schema.org',
  '@type': ['WebPage', 'CollectionPage', 'Blog'],
  name: 'Helxon Cybersecurity Blog',
  url: 'https://helxon.com/blogs',
  description:
    'Cybersecurity insights, threat intelligence, and SOC best practices from Helxon’s security experts.',
  isPartOf: {
    '@type': 'WebSite',
    name: 'Helxon',
    url: 'https://helxon.com',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Helxon',
    url: 'https://helxon.com',
  },
};

export function BlogsPageContent({ blogs = [] }) {
  const [openIndex, setOpenIndex] = useState(null);
  const [lightboxImage, setLightboxImage] = useState(null);

  const toggleBlog = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const openLightbox = (imageUrl, title) => {
    setLightboxImage({ url: imageUrl, title });
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  // Handle ESC key to close lightbox
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape' && lightboxImage) {
        closeLightbox();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [lightboxImage]);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  // Rich text rendering options
  const richTextOptions = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
      [BLOCKS.HEADING_1]: (node, children) => <h1>{children}</h1>,
      [BLOCKS.HEADING_2]: (node, children) => <h2>{children}</h2>,
      [BLOCKS.HEADING_3]: (node, children) => <h3>{children}</h3>,
      [BLOCKS.HEADING_4]: (node, children) => <h4>{children}</h4>,
      [BLOCKS.HEADING_5]: (node, children) => <h5>{children}</h5>,
      [BLOCKS.HEADING_6]: (node, children) => <h6>{children}</h6>,
      [BLOCKS.UL_LIST]: (node, children) => <ul>{children}</ul>,
      [BLOCKS.OL_LIST]: (node, children) => <ol>{children}</ol>,
      [BLOCKS.LIST_ITEM]: (node, children) => <li>{children}</li>,
      [BLOCKS.QUOTE]: (node, children) => <blockquote>{children}</blockquote>,
      [BLOCKS.HR]: () => <hr />,
      [INLINES.HYPERLINK]: (node, children) => (
        <a href={node.data.uri} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      ),
    },
  };

  const blogCollectionSchema =
    blogs && blogs.length > 0
      ? {
          ...baseBlogCollectionSchema,
          hasPart: blogs.map((blog) => ({
            '@type': 'BlogPosting',
            headline: blog.fields?.title,
            description: blog.fields?.excerpt,
            datePublished: blog.sys?.createdAt,
            dateModified: blog.sys?.updatedAt || blog.sys?.createdAt,
          })),
        }
      : baseBlogCollectionSchema;

  return (
    <div className="blogs-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogCollectionSchema) }}
      />
      {/* Hero Section */}
      <section className="blogs-page__hero">
        <div className="blogs-page__hero-container">
          <motion.div
            className="blogs-page__hero-content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div
              className="blogs-page__hero-logo"
              initial={{ opacity: 0, scale: 0.85, y: -30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, type: 'spring' }}
            >
              <Image 
                src={HeroLogo} 
                alt="Helxon logo" 
                width={150}
                height={150}
                priority
              />
            </motion.div>
            <motion.h1
              className="blogs-page__hero-title"
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Blogs
            </motion.h1>
            <motion.p
              className="blogs-page__hero-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Insights, updates, and expert perspectives on cybersecurity and digital transformation.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Blogs Section */}
      <section className="blogs-page__main">
        <div className="blogs-page__main-container">
          {blogs.length === 0 ? (
            <motion.div
              className="blogs-page__empty"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <p>No blog posts available at the moment. Check back soon!</p>
            </motion.div>
          ) : (
            <motion.div
              className="blogs-page__blog-list"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {blogs.map((blog, index) => (
                <motion.div
                  key={blog.sys.id}
                  className={`blogs-page__blog-item ${openIndex === index ? 'active' : ''}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.05 }}
                >
                  <motion.div
                    className="blogs-page__blog-question"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    {blog.fields.featuredImage && (
                      <div 
                        className="blogs-page__blog-thumbnail"
                        onClick={(e) => {
                          e.stopPropagation();
                          openLightbox(
                            `https:${blog.fields.featuredImage.fields.file.url}`,
                            blog.fields.title
                          );
                        }}
                      >
                        <Image
                          src={`https:${blog.fields.featuredImage.fields.file.url}`}
                          alt={blog.fields.title || 'Blog post image'}
                          width={160}
                          height={160}
                          style={{ objectFit: 'cover' }}
                        />
                        <div className="blogs-page__blog-thumbnail-overlay">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <circle cx="11" cy="11" r="8" />
                            <path d="m21 21-4.35-4.35" />
                            <line x1="11" y1="8" x2="11" y2="14" />
                            <line x1="8" y1="11" x2="14" y2="11" />
                          </svg>
                        </div>
                      </div>
                    )}
                    <button
                      className="blogs-page__blog-header-button"
                      onClick={() => toggleBlog(index)}
                    >
                      <div className="blogs-page__blog-header">
                        <div className="blogs-page__blog-header-top">
                          <span className="blogs-page__blog-title">{blog.fields.title}</span>
                        </div>
                        <div className="blogs-page__blog-meta-inline">
                          {blog.fields.category && (
                            <span className="blogs-page__blog-category">{blog.fields.category}</span>
                          )}
                          <span className="blogs-page__blog-date">{formatDate(blog.sys.createdAt)}</span>
                        </div>
                      </div>
                      <motion.div
                        className="blogs-page__blog-read-more"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <span>{openIndex === index ? 'Show Less' : 'Read More'}</span>
                        <motion.div
                          animate={{ rotate: openIndex === index ? 90 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ArrowRight size={20} />
                        </motion.div>
                      </motion.div>
                    </button>
                  </motion.div>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        className="blogs-page__blog-content-wrapper"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <div className="blogs-page__blog-content">
                          {blog.fields.excerpt && (
                            <p className="blogs-page__blog-excerpt">{blog.fields.excerpt}</p>
                          )}
                          {blog.fields.content && (
                            <div className="blogs-page__blog-body">
                              {documentToReactComponents(blog.fields.content, richTextOptions)}
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <AboutUsCTA />

      {/* Image Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            className="blogs-page__lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeLightbox}
          >
            <motion.div
              className="blogs-page__lightbox-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3, type: 'spring', damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="blogs-page__lightbox-close"
                onClick={closeLightbox}
                aria-label="Close lightbox"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
              <div className="blogs-page__lightbox-image-wrapper">
                <Image
                  src={lightboxImage.url}
                  alt={lightboxImage.title || 'Blog image'}
                  width={1200}
                  height={800}
                  style={{ objectFit: 'contain' }}
                  priority
                />
              </div>
              {lightboxImage.title && (
                <p className="blogs-page__lightbox-caption">{lightboxImage.title}</p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

