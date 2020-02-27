from sqlalchemy import (
    Boolean,
    Column,
    DateTime,
    ForeignKey,
    Integer,
    JSON,
    String,
    Table,
)
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship


Base = declarative_base()


notice_cves = Table(
    "notice_cves",
    Base.metadata,
    Column("notice_id", Integer, ForeignKey("notice.id")),
    Column("cve_id", String, ForeignKey("cve.id")),
)

notice_releases = Table(
    "notice_releases",
    Base.metadata,
    Column("notice_id", Integer, ForeignKey("notice.id")),
    Column("release_id", String, ForeignKey("release.id")),
)


class CVE(Base):
    __tablename__ = "cve"

    id = Column(String, primary_key=True)


class Notice(Base):
    __tablename__ = "notice"

    id = Column(String, primary_key=True)
    title = Column(String)
    published = Column(DateTime)
    summary = Column(String)
    details = Column(String)
    instructions = Column(String)
    packages = Column(JSON)
    cves = relationship("CVE", secondary=notice_cves)
    releases = relationship("Release", secondary=notice_releases)


class Release(Base):
    __tablename__ = "release"

    id = Column(Integer, primary_key=True)
    name = Column(String, unique=True)
    version = Column(String, unique=True)
    codename = Column(String, unique=True)
    lts = Column(Boolean)
